import React, { Component } from 'react';

class Dashboard extends Component {

  constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
      alert('The form is submitted.');
      event.preventDefault();
      event.cl
    }


  render() {
    return (
      <form class="form-inline dashboard-form" onSubmit={this.handleSubmit}>
      <div class="row">
        <div class="form-group">
          <label for="courseName">Course Name</label>
          <input type="text" class="form-control" id="courseName" placeholder="Artificial Intelligence" />
        </div>
        <div class="form-group">
          <label for="endTime">End Time </label>
          <input type="time" class="form-control" id="endTime" placeholder="jane.doe@example.com" />
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
