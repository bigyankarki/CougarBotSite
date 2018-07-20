import React, { Component } from 'react';
import request from 'request';

import { db, firebase_config } from '../../config/firebase';
import * as firebase from 'firebase';

class Login extends Component {

  constructor(props){
    super(props);

    this.state = {
      inputs: {
        user: '',
        token: ''
      },
      feedback: {
        login: false
      }
    };

    this.handleFbLogin = this.handleFbLogin.bind(this);
    this.getUserPSID = this.getUserPSID.bind(this);
    this.goto = this.goto.bind(this);
  }

  goto = (page) => {
    this.props.history.push(page)
  }

   handleFbLogin() {
    var that = this;
    let provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(async function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        const res = result.additionalUserInfo.profile;

        const psId = await that.getUserPSID(res.id);
        const PSID = psId.data[0].id;

        const user_db = db.ref(`users/${PSID}`);

        var input = {user: res.first_name, token: token};
        that.setState({inputs: input, feedback: true});
        if(user_db.id){
        }
        else{
          const user_db = db.ref('users/' + PSID).set({
            id: PSID,
            displayName: res.first_name,
            email: res.email
          })
        }

        localStorage.setItem("user", PSID);
        localStorage.setItem("userName", res.first_name);
        that.goto('/dashboard');
    })
    .catch(function(error) {
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

  getUserPSID =  (sender_asid) => {
    console.log('inside the fucntion');
    let url = `https://graph.facebook.com/v3.0/${sender_asid}/ids_for_pages?&access_token=${firebase_config.APP_ACCESS_TOCKEN_COUGARBOT_TEST1}`
    return new Promise(function(resolve, reject){
      request({
        url : url,
        json: true
      }, (error, response, body) => {
        console.log(body);
        resolve(body)
      });
    });
  }

  render() {
    const { username } = this.state;
    return (
      <section className="login bg-primary text-center container" id="login">
      <h2>Facebook login allows you to use homework feature of the bot. Click the button below to login.</h2>
      <div style={{marginTop: '17%'}}>
        <button className="btn btn-outline btn-xl" onClick={this.handleFbLogin}><i className="icon-social-facebook"></i>Facebook Login</button>
      </div>
      </section>
    );
  }
}

export default Login;
