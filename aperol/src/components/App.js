import './App.css';
import React, { Component } from 'react';
import Menu from './Menu';
import Footer from './Footer';

class App extends Component {
  state = {
    isModalOpen: true, 
    isAllowed: false,  
  };

  secondBanerRef = React.createRef();

  handleConfirmation = (isAllowed) => {
    this.setState({
      isModalOpen: false,
      isAllowed: isAllowed,
    });
  };

  render() {
    const { isModalOpen, isAllowed } = this.state;

    return (
      <div className={`App ${isModalOpen ? 'blur' : ''}`}>
        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <h2 style={{ color: 'white' }}>Are you of legal drinking age?</h2>
              <div className="modal-buttons">
                <button className="modal-button" onClick={() => this.handleConfirmation(true)}>Yes</button>
                <button className="modal-button" onClick={() => this.handleConfirmation(false)}>No</button>
              </div>
            </div>
          </div>
        )}
        {isAllowed && (
          <>
            <Menu secondBanerRef={this.secondBanerRef} />
            <div className="baner">
              <img src={require("./baner.jpg")} alt="baner" />
            </div>
            <div className="baner-text">
              <h1>Real Aperol Experience</h1>
            </div>
            <div className="baner-text-2">
              <p>Ignite the orange spark!</p>
            </div>
            <div ref={this.secondBanerRef} className="second-baner">
  <img src={require('./left-image.jpg')} alt="Left graphic" className="second-baner-left" />
  <div className="second-baner-content">
    <h2 className="second-baner-title">What is the Orange Aperol Spritz?</h2>
    <p className="second-baner-description">
      Aperol is a unique blend of bitter orange, herbs, and botanicals, creating a vibrant and refreshing taste.
      It's the perfect choice for a summer cocktail or a refreshing drink anytime.
    </p>
  </div>
  <img src={require('./right-image.jpg')} alt="Right graphic" className="second-baner-right" />
</div>
            <Footer />
          </>
        )}
        {!isAllowed && !isModalOpen && <h2 style={{ color: 'white' }}>Access Denied</h2>}
      </div>
    );
  }
}

export default App;
