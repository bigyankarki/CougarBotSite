import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

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

import * as Pages from './components';

//components
import Header from './components/headerComponents/header'
import Footer from './components/footerComponents/footer'


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header />
          <div className="content">
            <Route exact path='/' component={Pages.Homepage} />
            <Route exact path='/login' component={Pages.Login} />
            <PrivateRoute exact path = '/dashboard' component={Pages.Dashboard} />
            <Route exact path = '/privacy' component={Pages.Privacy} />
            <Route exact path = '/terms' component={Pages.Terms} />
            <Route exact path = '/faqs' component={Pages.Faqs} />
          </div>
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
