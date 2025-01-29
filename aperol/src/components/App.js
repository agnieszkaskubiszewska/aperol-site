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
  recipeRef = React.createRef();
  galleryRef = React.createRef();

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
            <Menu 
              secondBanerRef={this.secondBanerRef} 
              recipeRef={this.recipeRef} 
              galleryRef={this.galleryRef}
            />
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
<h2 className="second-baner-title">What is the Aperol Spritz?</h2>
<p className="second-baner-description">
Aperol is a unique blend of <br />
 <strong>orange, herbs, <br />
and botanicals</strong>, creating <br />
  a vibrant and refreshing <br />
  taste. It's the perfect <br />
  choice for a summer <br />
  cocktail or a refreshing <br />
  drink anytime.
</p>
</div>
  <img src={require('./right-image.jpg')} alt="Right graphic" className="second-baner-right" />
</div>
<div ref={this.recipeRef} className="third-baner">
  <div className="third-baner-content">
    <h2 className="third-baner-title">The official Aperol Spritz recipe approved by the IBA (International Bartenders Association).</h2>
    <div className="third-baner-recipe">
      <h3 className="third-baner-recipe-title">Ingredients:</h3>
      <ul>
        <li className="third-baner-recipe-item">1 part Aperol</li>
        <li className="third-baner-recipe-item">1 part Prosecco</li>
        <li className="third-baner-recipe-item">1 part soda water</li>
        <li className="third-baner-recipe-item">1 part orange slice</li>
        <li className="third-baner-recipe-item">1 part orange slice</li>
      </ul>
      
      <h3 className="third-baner-recipe-title">Instructions:</h3>
      <ul>
        <li className="third-baner-recipe-item">1. Fill a large wine glass with ice</li>
        <li className="third-baner-recipe-item">2. Pour in the Prosecco</li>
        <li className="third-baner-recipe-item">3. Add the Aperol</li>
        <li className="third-baner-recipe-item">4. Top with a splash of soda water</li>
        <li className="third-baner-recipe-item">5. Garnish with an orange slice</li>
      </ul>
    </div>
  </div>
  <img src={require('./right-image.jpg')} alt="Recipe graphic" className="third-baner-image" />
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
