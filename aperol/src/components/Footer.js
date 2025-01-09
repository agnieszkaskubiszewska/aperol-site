import './App.css';
import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  } 

  render() {
    return (
        <div className='footer'>
        <a href="https://www.linkedin.com/in/agnieszka-skubiszewska-17aaa4106/">LinkedIn</a>
        <a href="https://open.spotify.com/playlist/5NbleROaHyKOZDwJEPm7f5?si=fefe370b536842f0">Space Playlist</a>
        <a href="https://github.com/agnieszkaskubiszewska"> GitHub</a>
        <a href="mailto:agnieszka.space@wp.pl">Send email</a>
      </div>
    );
  }
}

export default Footer;
