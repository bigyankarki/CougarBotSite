import React, { Component } from 'react';
import {logout} from '../../auth';

class SignOut extends Component {

  constructor(props){
    super(props);
  }

  handleSignOut(){
    logout();
  }

  render() {
    return (
      <li className="nav-item">
        <a
          className="nav-link js-scroll-trigger"
          href="/"
          onClick = {() => this.handleSignOut()}
          >
          Sign out
        </a>
      </li>
    );
  }
}

export default SignOut;
