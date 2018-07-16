import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
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
    );
  }
}

export default About;
