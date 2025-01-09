import './App.css';
import React, { Component } from 'react';
import Menu from './Menu';
import Footer from './Footer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Menu />
        <div>Hello World</div>
        <Footer />

      </div>
    );
  }
}

export default App;
