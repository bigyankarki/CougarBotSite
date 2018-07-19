import React, { Component } from 'react';
import {logout} from '../../auth';

class SignOut extends Component {
  render() {
    return (
      <li className="nav-item">
        <a className="nav-link js-scroll-trigger" onClick ={logout} href="/">Sign out</a>

      </li>
    );
  }
}

export default SignOut;
