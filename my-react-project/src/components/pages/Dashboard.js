import React, { Component } from 'react';
import { db } from '../../config/firebase';
class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      inputs: {
        courseName: '',
        description: '',
        day: 'Friday',
        endTime: '',
      },
      feedback: {
        courseName: '',
        endTime: '',
      },
      user: localStorage.getItem('user')
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

     const {courseName, description, day, endTime} = this.state.inputs;

      db.ref(`posts/${this.state.user}`).set({
        courseName,
        description,
        day,
        endTime
      })

    }


    handleInputChange(input) {
      return (e) => {
        e.preventDefault();

        this.setState({
          inputs: Object.assign({}, this.state.inputs, {[input]: e.target.value})
        })
      };
    }



  render() {
    return (
      <form class="form-inline dashboard-form" onSubmit={this.handleSubmit}>
      <div class="row">
        <div class="form-group">
          <label for="courseName">Course Name</label>
          <input
            type="text"
            class="form-control"
            id="courseName"
            placeholder="Artificial Intelligence"
            onChange={this.handleInputChange('courseName')} />
        </div>

          <div class="form-group">
          <label for="courseName">Course Name</label>
          <input
            type="text"
            class="form-control"
            id="courseName"
            placeholder="Artificial Intelligence"
            onChange={this.handleInputChange('description')} />
        </div>
        <div class="form-group">
          <label for="endTime">End Time </label>
          <input
          type="time"
          class="form-control"
          id="endTime"
          onChange={this.handleInputChange('endTime')} />
        </div>
        <div class="form-group">
          <label for="days">Day</label>
          <select multiple class="form-control" id="days">
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
          </select>
          </div>
          </div>
            <button type="submit" class="btn btn-primary" value="Submit">Submit</button>
        </form>
    );
  }
}

export default Dashboard;
