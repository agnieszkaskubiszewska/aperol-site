import './App.css';
import React, { Component } from 'react';
import Menu from './Menu';
import Footer from './Footer';

class App extends Component {
  state = {
    isModalOpen: true, 
    isAllowed: false,  
  };

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
        <Menu />
<div className='baner'>
  <img src={require("./baner.jpg")} alt="baner" />
</div>
<div className='baner-text'> <h1>Real Aperol Experience</h1></div>
<div className='baner-text-2'><p>Ignite the orange spark!</p></div>
<div className='second-baner'></div>
            <Footer />
          </>
        )}
        {!isAllowed && !isModalOpen && <h2 style={{ color: 'white' }}>Access Denied</h2>}
      </div>
    );
  }
}

export default App;
