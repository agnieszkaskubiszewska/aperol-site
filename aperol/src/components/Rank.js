import React, { Component } from 'react';
import './Rank.css';

class Rank extends Component {
  render() {
    return (
      <div className='rank-section'>
        <h1 className="rank-title">Aperol League</h1>
        <div className="rank-container">
          <div className="rank-intro">
            <h2>Welcome to the Aperol League!</h2>
            <p>Join our community of Aperol enthusiasts and share your favorite moments. 
               Rate bars, share recipes, and discover the best Aperol experiences around the world.</p>
          </div>
          
          <div className="rank-grid">
            <div className="rank-card">
              <h3>Top Rated Bars</h3>
              <ul>
                <li>
                  <span className="bar-name">Sky Bar Milano</span>
                  <span className="bar-rating">⭐️ 4.9</span>
                </li>
                <li>
                  <span className="bar-name">Sunset Lounge Barcelona</span>
                  <span className="bar-rating">⭐️ 4.8</span>
                </li>
                <li>
                  <span className="bar-name">Beach Club Ibiza</span>
                  <span className="bar-rating">⭐️ 4.7</span>
                </li>
              </ul>
            </div>

            <div className="rank-card">
              <h3>Community Favorites</h3>
              <div className="favorite-recipes">
                <div className="recipe-item">
                  <h4>Aperol Sunset</h4>
                  <p>A twist on the classic with added passion fruit</p>
                  <span className="likes">❤️ 1.2k</span>
                </div>
                <div className="recipe-item">
                  <h4>Orange Dream</h4>
                  <p>Aperol with fresh orange juice and mint</p>
                  <span className="likes">❤️ 980</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Rank;

