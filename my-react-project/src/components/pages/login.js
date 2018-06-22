import React, { Component } from 'react';
import FacebookLogin from './faceBookLoginButton';

class Login extends Component {
constructor(props){

  super(props);
  this.state = {
    username: null
  }

  this.goto = this.goto.bind(this)
  }

  goto = (page) => {
    console.log(this.props)
    this.props.history.push(page)
  }



  onFacebookLogin = (loginStatus, resultObject) => {
    if (loginStatus === true) {
      this.setState({
        username: resultObject.user.name
      });
      this.goto('/dashboard');
      console.log('resul', resultObject);
    } else {
      alert('Facebook login error');
    }
  }


  render() {
    const { username } = this.state;
    return (
      <div className="login-intro">
      {!username &&
         <div>
              <FacebookLogin onLogin={this.onFacebookLogin}>
               <section class="login bg-primary" id="login">
                 <div class="fb-login-button" data-max-rows="1" data-size="large" data-button-type="login_with" data-show-faces="true" data-auto-logout-link="true" data-use-continue-as="true"></div>
               </section>
               </FacebookLogin>
        </div>
      } {
        username

      }
      </div>
    );
  }
}

export default Login;
