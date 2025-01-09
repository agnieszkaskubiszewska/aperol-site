import './App.css';
import React, { Component } from 'react';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  } 

  render() {
    return (
      <div>
        <button>About</button>
        <button>Przepisy</button>
        <button>Blog</button>
        <button>Zdjęcia</button>
      </div>
    );
  }
}

export default Menu;
