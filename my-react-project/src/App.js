import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

//components
import Header from './components/headerComponents/header'
import Footer from './components/footerComponents/footer'
import Homepage from './components/pages/homepage'
import About from './components/pages/about'
import Login from './components/pages/login'
import Dashboard from './components/pages/Dashboard'

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

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header />
          <div className="content">
            <Route exact path='/' component={Homepage} />
            <Route exact path='/login' component={Login} />
            <Route exact path = '/dashboard' component={Dashboard} />
            <Route exact path = '/privacy' component={Dashboard} />
            <Route exact path = '/terms' component={Dashboard} />
            <Route exact path = '/faqs' component={Dashboard} />
          </div>
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
