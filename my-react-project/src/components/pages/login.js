import React, { Component } from 'react';
import FacebookLogin from './faceBookLoginButton';
import { db } from '../../config/firebase';
import * as firebase from 'firebase';

export default class Login extends Component {

  constructor(props){
    super(props);

    this.state = {
      inputs: {
        //username: null,
      },
      feedback: {
        login: false
      }

    };

    this.handleFbLogin = this.handleFbLogin.bind(this);
  }


  handleFbLogin() {
    let provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        const res = result.additionalUserInfo.profile;
        console.log('user', res.id);
        const user_db = db.ref(`users/${res.id}`);
        if(user_db.id){

        }
        else{
          const user_db = db.ref('users/' + res.id).set({
            id: res.id,
            displayName: res.first_name,
            email: res.email
          })
        }
        console.log(res.id);
        localStorage.setItem("user", res.id);

    }).catch(function(error) {
      console.log(error);
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });


  }


  render() {
    const { username } = this.state;
    return (
      <div className="" style={{marginTop: '60px'}}>
        <button onClick={this.handleFbLogin}>Firebase Facebook</button>

      </div>
    );
  }
}
