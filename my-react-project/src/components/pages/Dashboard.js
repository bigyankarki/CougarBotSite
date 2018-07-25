import React, { Component } from 'react';
import { db } from '../../config/firebase';
import NewUserForm from './NewUserForm';
import ExistingUserForm from './ExistingUserForm';

class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: localStorage.getItem('user'),
      userName: localStorage.getItem("userName"),
      existing_user: false
    }
    }

    async componentDidMount(){
      let status = await db.ref('/user_courses').once('value').then( function(snapshot) {
         let course_obj = snapshot.val();
         let found = false;
         for(var each_user in course_obj){
           if(localStorage.getItem('user') === each_user){
             found = true;
             break;
           }
         }
         return found;
       })
       console.log(status);
       this.setState({existing_user: status})
    }

  // check if user already has data in database, if Yes render to edit it.
  render() {
    return (
      <section className="container bg-primary">
        {
          (this.state.existing_user) ? <ExistingUserForm /> : <NewUserForm />
        }
        </section>
    );
  }
}

export default Dashboard;
