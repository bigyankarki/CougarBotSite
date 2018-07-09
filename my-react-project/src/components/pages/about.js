import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <section className="about bg-primary text-center" id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h2 className="section-heading">About us!</h2>
            <p>Our app is available on any mobile device! Download now to get started!</p>
          </div>
        </div>
      </div>
    </section>
    );
  }
}

export default About;
