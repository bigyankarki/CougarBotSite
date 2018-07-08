import React, { Component } from 'react';
import { db } from '../../config/firebase';

class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.state = {
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

  render() {
    return (

      <div>
        <div className='userName'>
          <p>Hey, {this.state.userName}</p>
        </div>
        <form className="form-group dashboard-form" onSubmit={this.handleSubmit}>
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
          </form>
        </div>
    );
  }
}

export default Dashboard;
