import React, { Component } from 'react';
import { db } from '../../config/firebase';
import NewUserForm from './NewUserForm';

class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: localStorage.getItem('user'),
      userName: localStorage.getItem("userName"),
      status: false
    }
    }

    async componentDidMount(){
      let status = await db.ref('/user_courses').once('value').then( async function(snapshot) {
         let course_obj = await snapshot.val();
         let flag = false;
         for(var each_user in course_obj){
           (localStorage.getItem('user') !== each_user) ? flag = true : flag = false;
         }
         return flag;
       })
       this.setState({status: status})
    }

  // check if user already has data in database, if Yes render to edit it.
  render() {
    return (
      <section className="container bg-primary">
        {
          (this.state.status) ? <div><NewUserForm /></div> : <p>Your data has been recieved, please contact to owner for any changes.</p>
        }

        </section>
    );
  }
}

export default Dashboard;
