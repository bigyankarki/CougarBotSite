import React, { Component } from 'react';

class Homepage extends Component {
  render() {
    return (
      <div>
      <header className="masthead">
      <div class="container h-100">
        <div class="row h-100">
          <div class="col-lg-7 my-auto">
            <div class="header-content mx-auto">
              <h1 class="mb-5">Caldwell University Smart Assistant. The solution to your ever existing college problems. Come, Say hi to CougarBot.</h1>
              <a href="#download" class="btn btn-outline btn-xl js-scroll-trigger">Say hi to CougarBot</a>
            </div>
          </div>
          <div class="col-lg-5 my-auto">
            <div class="device-container">
              <div class="device-mockup iphone6_plus portrait white">
                <div class="device">
                  <div class="screen">
                    <img src="img/demo-screen-1.jpg" class="img-fluid" alt="" />
                  </div>
                  <div class="button">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section class="about bg-primary text-center" id="about">
    <div class="container">
      <div class="row">
        <div class="col-md-8 mx-auto">
          <h2 class="section-heading">Discover what all the buzz is about!</h2>
          <p>Our app is available on any mobile device! Download now to get started!</p>
          <div class="badges">
            <a class="badge-link" href="#"><img src="img/google-play-badge.svg" alt="" /></a>
            <a class="badge-link" href="#"><img src="img/app-store-badge.svg" alt="" /></a>
          </div>
        </div>
      </div>
    </div>
  </section>



    </div>


    );
  }
}

export default Homepage;
