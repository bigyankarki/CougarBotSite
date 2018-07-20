import React, { Component } from 'react';
import demoscreen from '../../assets/img/demo-screen.jpg'

import founder1 from '../../assets/img/founder1.jpg'
import founder2 from '../../assets/img/founder2.jpg'
import founder3 from '../../assets/img/founder3.jpg'
import founder4 from '../../assets/img/founder4.jpg'


export default class Homepage extends Component {
  render() {
    return (
      <div>
      <header className="masthead">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-lg-7 my-auto">
            <div className="header-content mx-auto">
              <h1 className="mb-5">Caldwell University Smart Assistant. The solution to your ever existing college problems. Come, say hi to CougarBot.</h1>
              <a href="https://m.me/CUcougarbot" className="btn btn-outline btn-xl">Say hi to CougarBot</a>
            </div>
          </div>
          <div className="col-lg-5 my-auto">
            <div className="device-container">
              <div className="device-mockup iphone6_plus potrait white">
                <div className="device">
                  <div className="screen">
                    <img src={demoscreen} className="img-fluid" alt="" />
                  </div>
                  <div className="button">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section className="features bg-primary text-center" id="features">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mx-auto">
            <h2 className="section-heading">Features</h2>
          </div>
        </div>
        <div className="row col-md-12">
          <div className="col-md-4 mx-auto">
            <div className="feature-item">
              <i className="icon-lock-open text-primary"></i>
              <h3>Open Source</h3>
              <p className="text-muted">This app is open Source. Consider contributing in Github.</p>
            </div>
          </div>

          <div className="col-md-4 mx-auto">
            <div className="feature-item">
              <i className="icon-present text-primary"></i>
              <h3>Free to use</h3>
              <p className="text-muted">Absolutly free to use for everyone! Consider donating to keep the app running.</p>
            </div>
          </div>

          <div className="col-md-4 mx-auto">
            <div className="feature-item">
              <i className="icon-book-open text-primary"></i>
              <h3>Save Homework</h3>
              <p className="text-muted">Save your homework after each class, and get notified at specified time!</p>
            </div>
          </div>
        </div>

        <div className="row col-md-12">
          <div className="col-md-4 mx-auto">
            <div className="feature-item">
              <i className="icon-emotsmile text-primary"></i>
              <h3>Easy User Interface</h3>
              <p className="text-muted">Our bot does not bite! Seriously, it is a perfect friend to pass your time with.</p>
            </div>
          </div>

          <div className="col-md-4 mx-auto">
            <div className="feature-item">
              <i className="icon-clock text-primary"></i>
              <h3>Library hours</h3>
              <p className="text-muted">Gone are the days to navigate college website to get library hours. Get library hours by simply asking cougarBot.</p>
            </div>
          </div>

          <div className="col-md-4 mx-auto">
            <div className="feature-item">
              <i className="icon-event text-primary"></i>
              <h3>College events</h3>
              <p className="text-muted">Get notified of happening college events just within your fingertips.</p>
            </div>
          </div>
        </div>

      </div>
    </section>


        <section className="about bg-primary text-center" id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mx-auto">
              <h2 className="section-heading">About us</h2>
              <p>Born as a side project, cougarBot is the brainchild of four curious minds at Caldwell University. With problems like having to check
                  college website for small task such as library hours to getting important notifications in an email, we waste significant amount of our time
                  navigating through proper sources. What if we could solve this problem? As a scholar of Computer Science, we took this responsibility, and built a go-to system
                  as a solution: <strong>CougarBot</strong>.
              </p>
            </div>
          </div>
            <div className="col-md-12 mx-auto">
              <div className="row">
              <div className="col-md-4">
                <div className="card">
                <a href="http://www.bigyankarki.com" target="_blank">
                  <img className="card-img-top" src={founder1} alt="Card image cap" />
                  <div className="card-body">
                    <h4>Bigyan Karki</h4>
                    <p className="card-text">Co-founder, full stack developer, AI/ML enthusiast</p>
                  </div>
                </a>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card">
                <a href="https://raashul.github.io/portfolio-app/" target="_blank">
                  <img className="card-img-top" src={founder3} alt="Card image cap" />
                  <div className="card-body">
                    <h4>Rashul Rajbhandari</h4>
                    <p className="card-text">Co-founder, full stack developer, Backend engineer</p>
                  </div>
                </a>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card">
                <a href="https://www.github.com/dahalaamosh" target="_blank">
                  <img className="card-img-top" src={founder4} alt="Card image cap" />
                  <div className="card-body">
                    <h4>Aamosh Dahal</h4>
                    <p className="card-text">Co-founder, full stack developer, Backend developer</p>
                  </div>
                </a>
                </div>
              </div>

            </div>

            </div>
        </div>
      </section>


    </div>


    );
  }
}
