import './App.css';
import React, { Component } from 'react';
import './Footer.css';


class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  } 

  render() {
    return (
        <div className='footer'>
        <a href="https://www.linkedin.com/in/agnieszka-skubiszewska-17aaa4106/" className="footer-link">LinkedIn</a>
        <a href="https://github.com/agnieszkaskubiszewska" className="footer-link"> GitHub</a>
        <a href="mailto:agnieszka.space@wp.pl" className="footer-link">Send email</a>
      </div>
    );
  }
}

export default Footer;
