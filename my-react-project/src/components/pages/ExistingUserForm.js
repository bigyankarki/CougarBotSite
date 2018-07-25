import React, { Component } from 'react';
import { db } from '../../config/firebase';

class ExistingUserForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
        courses: [
          {
          courseName: '',
          day: [],
          endTime: ''
        }
      ],
      user: localStorage.getItem('user'),
      userName: localStorage.getItem("userName"),
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    async componentDidMount(){
      let obj = await db.ref('/user_courses').once('value').then( async function(snapshot) {
        let courses = []
         let course_obj = await snapshot.val();
         for(var each_user in course_obj){
           if(localStorage.getItem('user') === each_user){
             for(var each_day in course_obj[each_user]){
               for(var each_course in course_obj[each_user][each_day]){
                 let course_endtime = course_obj[each_user][each_day][each_course].end_time;
                   courses.push({courseName: each_course, day: [each_day], endTime: course_endtime})
               }
             }
           }
         }
         return courses
       })

       for(var i = 0; i < obj.length; i++){
        for(var j = i+1; j < obj.length; j++){
          if(obj[i].courseName === obj[j].courseName){
            obj[i].day.push(obj[j].day[0])
            var index = obj.indexOf(obj[j])
            if(index > -1){
              obj.splice(index, 1)
            }
          }
        }
      }
       this.setState({courses: obj})
    }


  async handleSubmit(event) {
    event.preventDefault();
    await db.ref('/user_courses').once('value').then(function(snapshot) {
       let course_obj = snapshot.val();
       for(var each_user in course_obj){
         if(localStorage.getItem('user') === each_user){
           db.ref('/user_courses' + '/' + localStorage.getItem('user')).remove()
         }
       }
     })

    let ref = db.ref('user_courses');
    let usersRef = ref.child(this.state.user);
    let indexState = this.state.courses;
    for(var i=0; i<indexState.length; i++){
      let courseName = indexState[i].courseName;
      let day = indexState[i].day;
      let end_time = indexState[i].endTime;
      for(var j=0;j<day.length;j++){
        let actualDay = day[j].toLowerCase();
        let value = usersRef.child(actualDay);
        value.update({
            [courseName]:{
              end_time
            }
        })
      }
    }

    alert("Thanks, the form has been submitted.");
  }


  handleInputChange(input,idx) {
    return (e) => {
      e.preventDefault();
      let indexCourse = this.state.courses;
      indexCourse[idx][input] = e.target.value;
      this.setState({courses: indexCourse});
    };
  }

  handleSelectChange(input,idx){
    return (e) => {
      e.preventDefault();
      let options = e.target.value;
      let indexCourse = this.state.courses;
      let days = indexCourse[idx][input];
      if(!days.includes(options)){
        days.push(options);
      }
      else if(days.includes(options)){
        for(var i=0;i<days.length;i++){
          if(days[i] === options){
            days.splice(i,1);
          }
        }
      }
      indexCourse[idx][input] = days;
      this.setState({courses: indexCourse});
    }
  }

  handleAddCourse = () => {
    this.setState({
    courses: this.state.courses.concat([{courseName: '', day: [], endTime: ''}])
  });
  }

  handleRemoveCourse = (idx) => () => {
    if (idx > 0){
      this.setState({
        courses: this.state.courses.filter((s, sidx) => idx !== sidx)
      });
      console.log(this.state.courses);
    }
  }

  render() {
    return (
      <div>
          <h1>Welcome back, {this.state.userName}.</h1>
          <p>Please update the form to the best of your knowledge. </p>
          <form className="form-group dashboard-form" onSubmit={this.handleSubmit}>

          {this.state.courses.map((course, idx) => (
            <div className="row text-center">
                  <div className="form-group">
                    <label for="courseName">Course Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="courseName"
                      placeholder={`Course #${idx + 1}`}
                      value={this.state.courses[idx].courseName}
                      onChange={this.handleInputChange('courseName',idx)} required/>
                  </div>

                  <div className="form-group">
                    <label for="endTime">Course end time </label>
                    <input
                    type="time"
                    className="form-control"
                    id="endTime"
                    value={this.state.courses[idx].endTime}
                    onChange={this.handleInputChange('endTime',idx)} required/>
                  </div>

                  <div className="form-group">
                    <label htmlFor="days">Days</label>
                    <select value = {this.state.courses.day} className="form-control" ref="days" onChange= {this.handleSelectChange('day',idx)} >
                        <option value="Selected"> Select </option>
                        <option value="monday">Monday</option>
                        <option value="tuesday">Tuesday</option>
                        <option value="wednesday">Wednesday</option>
                        <option value="thursday">Thursday</option>
                        <option value="friday">Friday</option>
                    </select>
                  </div>
                  <div className="form-group selectedDay">
                    <label htmlFor="selectedDays">Selected Days </label>
                    <input type="text" className="form-control readOnly selectedDayText" value={this.state.courses[idx].day} id="selectedDays" required/>
                  </div>
                  <div className="form-group">
                    {idx !== 0 ? <i onClick={this.handleRemoveCourse(idx)} className="icon-minus"></i> : console.log("Hide remove button")}
                    {idx === 0 ? <i onClick={this.handleAddCourse} className="icon-plus"></i> : console.log("Hide plus button")}
                  </div>
              </div>
          ))}
          <button type="submit" className="btn btn-outline btn-xl" value="Submit">Update</button>
          </form>
      </div>
    );
  }
}

export default ExistingUserForm;
