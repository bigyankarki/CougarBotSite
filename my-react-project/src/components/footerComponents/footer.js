import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
      <div className="container">
        <p>&copy; www.cougarbot.com  2018. All Rights Reserved.</p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="/privacy">Privacy</a>
          </li>
          <li className="list-inline-item">
            <a href="/terms">Terms</a>
          </li>
          <li className="list-inline-item">
            <a href="faqs">FAQ</a>
          </li>
        </ul>
      </div>
    </footer>
    );
  }
}

export default Footer;
