import React, { Component } from 'react';
import { db } from '../../config/firebase';

class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.state = {
<<<<<<< Updated upstream
      inputs: {
        courseName: '',
        description: '',
        day: [],
        endTime: '',
      },
      feedback: {
        courseName: '',
        endTime: '',
      },
=======
        courses: [
          {
          courseName: '',
          day: [],
          endTime: ''
        }
      ],
>>>>>>> Stashed changes
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
      let ref = db.ref('user_courses');
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

<<<<<<< Updated upstream
    handleSelectChange(event){
      event.preventDefault();
      var options = event.target.value;
      var days = this.state.inputs.day;
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
      this.setState({day:days});
      console.log(this.state.inputs.day);
    }

    displayChosen(){
      for(var i=0;i<this.state.inputs.day.length;i++){
        return <div> <p> {this.state.inputs.day} </p> </div>
      }
    }

=======
    handleRemoveCourse = (idx) => () => {
      if (idx > 0){
        this.setState({
          courses: this.state.courses.filter((s, sidx) => idx !== sidx)
        });
      }

  }
>>>>>>> Stashed changes
  render() {
    return (
      <section className="container bg-primary">
      <h1>Welcome, {this.state.userName}.</h1>
      <p>Please fill the form to the best of your knowledge. </p>

        <form className="form-group dashboard-form" onSubmit={this.handleSubmit}>
<<<<<<< Updated upstream
        <div className="row">
          <div className="form-group">
            <label htmlFor="courseName">Course Name</label>
            <input
              type="text"
              className="form-control"
              id="courseName"
              placeholder="Artificial Intelligence"
              onChange={this.handleInputChange('courseName')} />
          </div>

            <div className="form-group">
            <label htmlFor="courseName">Course Name</label>
            <input
              type="text"
              className="form-control"
              id="courseName"
              placeholder="Artificial Intelligence"
              onChange={this.handleInputChange('description')} />
          </div>
          <div className="form-group">
            <label htmlFor="endTime">End Time </label>
            <input
            type="time"
            className="form-control"
            id="endTime"
            onChange={this.handleInputChange('endTime')} />
          </div>
          <div className="form-group">
            <label htmlFor="days">Day</label>
            <select value = {this.state.inputs.day} className="form-control" ref="days" id="hero" onChange= {this.handleSelectChange}>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
            </select>
            <div>
            </div>
            </div>
            </div>
            <div>
              <button type="submit" className="btn btn-primary" value="Submit">Submit</button>
            </div>
=======

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
                  <i onClick={this.handleAddCourse} className="icon-plus"></i>
                </div>
            </div>

        ))}
              <button type="submit" className="btn btn-outline btn-xl" value="Submit">Submit</button>

>>>>>>> Stashed changes
          </form>
        </section>
    );
  }
}

export default Dashboard;
