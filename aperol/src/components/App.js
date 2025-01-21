import './App.css';
import React, { Component } from 'react';
import Menu from './Menu';
import Footer from './Footer';
import ReactCurvedText from 'react-curved-text';

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
            <div className='baner'><img src={require("./baner.jpg")} alt="baner" /></div>
            <div className="white-ball">
              <ReactCurvedText
                width={500}
                height={500}
                cx={250}
                cy={250}
                rx={200}
                ry={200}
                startOffset={100}
                reversed={true}
                text="Welcome to Aperol World"
                textProps={{ style: { fontSize: 38, fill: 'orange', fontWeight: 'bold' } }}
                textPathProps={null}
                tspanProps={null}
                ellipseProps={null}
                svgProps={{}}
              />
              <img className="graphic" src={require("./grf.jpg")} alt="aperol" />
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
