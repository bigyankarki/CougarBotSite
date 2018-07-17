import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Login from '../pages/login.js'

import SignIn from './SignIn'
import SignOut from './SignOut.js'

import {isLoggedIn} from '../../auth';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand js-scroll-trigger" href="/">Cougar Bot</a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i className="fa fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="/#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="/#features">Features</a>
            </li>
            {isLoggedIn == true ?
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/dashboard">Dashboard</a>
              </li> : null
            }

            {isLoggedIn == true ? <SignOut /> : <SignIn />}

          </ul>
        </div>
      </div>
    </nav>
    );
  }
}

export default Header;
