import React, { Component } from 'react';
import FacebookLogin from './faceBookLoginButton';

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
        username &&
        <div>
        <p> Welcome back, {username}</p>

        <form className="form-inline" action="/action_page.php">
         <div class="form-group">
           <label for="email">Email address:</label>
           <input type="email" class="form-control" id="email" />
         </div>
         <div class="form-group">
           <label for="pwd">Password:</label>
           <input type="password" class="form-control" id="pwd" />
         </div>
         <div class="checkbox">
           <label><input type="checkbox" /> Remember me</label>
         </div>
         <button type="submit" class="btn btn-default">Submit</button>
        </form>

        </div>


      }
      </div>
    );
  }
}

export default Login;
