import React, { Component } from 'react';
import FacebookLoginButton from './facebookLoginButton';

class Login extends Component {

  state = {
    username: null
  };

  onFacebookLogin = (loginStatus, resultObject) => {
    if (loginStatus === true) {
      this.setState({
        username: resultObject.user.name
      });
    } else {
      alert('Facebook login error');
    }
  }
  render() {
    const { username } = this.state;
    return (
      <section class="login bg-primary" id="login">
      <div class="fb-login-button" data-max-rows="1" data-size="large" data-button-type="login_with" data-show-faces="true" data-auto-logout-link="true" data-use-continue-as="true"></div>
    </section>
    );
  }
}

export default Login;
