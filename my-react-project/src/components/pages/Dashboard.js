import React, { Component } from 'react';
import { db } from '../../config/firebase';

class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      courses: [{
        courseName: '',
        description: '',
        day: '',
        endTime: ''}],
      user: localStorage.getItem('user'),
      userName: localStorage.getItem("userName")
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount(){
      db.ref(`posts/${this.state.user}`).once('value')
        .then(snapshot => {

        })
    }

    handleSubmit(event) {

      event.preventDefault();
      console.log('this.state', this.state);

     const {courseName, day, endTime} = this.state.courses;

      db.ref(`posts/${this.state.user}`).set({
        courseName,
        day,
        endTime
      })

    }


    handleInputChange(input) {
      return (e) => {
        e.preventDefault();

        this.setState({
          inputs: Object.assign({}, this.state.courses, {[input]: e.target.value})
        })
      };
    }

    handleAddCourse = () => {
      this.setState({
      courses: this.state.courses.concat([{courseName: '', description: '', day: '', endTime: ''}])
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
                    onChange={this.handleInputChange('courseName')} />
                </div>

                <div className="form-group">
                  <label for="endTime">End Time </label>
                  <input
                  type="time"
                  className="form-control"
                  id="endTime"
                  onChange={this.handleInputChange('endTime')} />
                </div>

                <div className="form-group">
                  <label htmlFor="days">Day</label>
                  <select multiple={true} className="form-control" ref="days" onChange= {this.handleInputChange('day')}>
                      <option selected value="Monday">Monday</option>
                      <option value="Tuesday">Tuesday</option>
                      <option value="Wednesday">Wednesday</option>
                      <option value="Thursday">Thursday</option>
                      <option value="Friday">Friday</option>
                  </select>
                </div>

                <div className="form-group">
                  <i onClick={this.handleRemoveCourse(idx)} className="icon-minus"></i>
                  <i onClick={this.handleAddCourse} className="icon-plus"></i>
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
