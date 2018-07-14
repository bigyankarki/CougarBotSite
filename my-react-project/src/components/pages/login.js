import React, { Component } from 'react';
import { db } from '../../config/firebase';
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
    this.goto = this.goto.bind(this);
  }

  goto = (page) => {
    this.props.history.push(page)
  }

  handleFbLogin() {
    var that = this;
    let provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        const res = result.additionalUserInfo.profile;
        const user_db = db.ref(`users/${res.id}`);
        var input = {user: res.first_name, token: token};
        that.setState({inputs: input, feedback: true});
        if(user_db.id){
        }
        else{
          const user_db = db.ref('users/' + res.id).set({
            id: res.id,
            displayName: res.first_name,
            email: res.email
          })
        }

        localStorage.setItem("user", res.id);
        localStorage.setItem("userName", res.first_name);
        that.goto('/dashboard');
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
