import React, { Component } from 'react';
import { db } from '../../config/firebase';

class Dashboard extends Component {

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
      userName: localStorage.getItem("userName")
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    componentWillMount(){
      db.ref(`posts/${this.state.user}`).once('value')
        .then(snapshot => {

        })
    }

    handleSubmit(event) {
      event.preventDefault();
      console.log('this.state', this.state);
      let ref = db.ref('test_courses');
      let usersRef = ref.child(this.state.user);
      let indexState = this.state.courses;
      for(var i=0; i<indexState.length; i++){
        let courseName = indexState[i].courseName;
        let day = indexState[i].day;
        console.log(day);
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
        console.log(this.state);
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
        console.log(this.state);
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
      }

  }
  render() {
    return (
      <section className="container bg-primary">
      <h1>Welcome, {this.state.userName}.</h1>
      <p>Please fill the form to the best of your knowledge. </p>
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
                    onChange={this.handleInputChange('courseName',idx)} />
                </div>

                <div className="form-group">
                  <label for="endTime">End Time </label>
                  <input
                  type="time"
                  className="form-control"
                  id="endTime"
                  onChange={this.handleInputChange('endTime',idx)} />
                </div>

                <div className="form-group">
                  <label htmlFor="days">Day</label>
                  <select value = {this.state.courses.day} className="form-control" ref="days" onChange= {this.handleSelectChange('day',idx)}>
                      <option value="Selected"> Select </option>
                      <option value="Monday">Monday</option>
                      <option value="Tuesday">Tuesday</option>
                      <option value="Wednesday">Wednesday</option>
                      <option value="Thursday">Thursday</option>
                      <option value="Friday">Friday</option>
                  </select>
                </div>
                <div className="form-group selectedDay">
                  <label htmlFor="selectedDays">Selected Days </label>
                  <input type="text" className="form-control readOnly selectedDayText" value={this.state.courses[idx].day} id="selectedDays" />
                </div>
                <div className="form-group">
                  <i onClick={this.handleRemoveCourse(idx)} className="icon-minus"></i>
                  {idx == 0 ? <i onClick={this.handleAddCourse} className="icon-plus"></i> : console.log("awesome")}
                </div>
            </div>

        ))}
              <button type="submit" className="btn btn-outline btn-xl" value="Submit">Submit</button>
          </form>
        </section>
    );
  }
}

export default Dashboard;
