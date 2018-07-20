import ReactDOM from 'react-dom';
// import App from './App';

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'

import { PrivateRoute } from './auth';

//includes
// Bootstrap core CSS
import "./assets/bootstrap/css/bootstrap.min.css"

//custom css for the page.
import './assets/css/new-age.css'

// custom fonts for the page.
import "./assets/font-awesome/css/font-awesome.min.css"
import "./assets/simple-line-icons/css/simple-line-icons.css"
import './assets/css/fonts.css';
import './assets/css/device-mockups.min.css'

//import * as Pages from './components';

//components
import Header from './components/headerComponents/header'
import Footer from './components/footerComponents/footer'
import Homepage from './components/pages/homepage'
import Login from './components/pages/login'
import Dashboard from './components/pages/Dashboard'
import Privacy from './components/pages/privacy'
import Terms from './components/pages/terms'
import Faqs from './components/pages/faqs'


ReactDOM.render(<Router>
  <div className="App">
    <Header />
      <div className="content">
        <Route exact path='/' component={Homepage} />
        <Route exact path='/login' component={Login} />
        <PrivateRoute exact path = '/dashboard' component={Dashboard} />
        <Route exact path = '/privacy' component={Privacy} />
        <Route exact path = '/terms' component={Terms} />
        <Route exact path = '/faqs' component={Faqs} />
      </div>
    <Footer />
  </div>
  </Router>,

  document.getElementById('root'));
