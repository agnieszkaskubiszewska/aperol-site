import './Menu.css';
import React, { Component } from 'react';
import { motion } from "framer-motion";

class Menu extends Component {
  handleNavigation = (ref) => {
    const { showOnlyMore, toggleMoreView, showOnlyRank, toggleRankView } = this.props;
    
    if (showOnlyMore || showOnlyRank) {
      if (showOnlyMore) toggleMoreView();
      if (showOnlyRank) toggleRankView();
      setTimeout(() => {
        if (ref) {
          const yOffset = -100;
          const element = ref.current;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({top: y, behavior: 'smooth'});
        } else {
          window.scrollTo({top: 0, behavior: 'smooth'});
        }
      }, 100);
    } else {
      if (ref) {
        const yOffset = -100;
        const element = ref.current;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
      } else {
        window.scrollTo({top: 0, behavior: 'smooth'});
      }
    }
  };

  render() {
    const { secondBanerRef, recipeRef, galleryRef, toggleMoreView, toggleRankView } = this.props;

    return (
      <div className="menu">
        <div className="menu-logo" onClick={() => this.handleNavigation(null)}>
          <img src={require("./grf.jpg")} alt="logo" />
        </div>
        <motion.button
          className="menu-buttons"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => this.handleNavigation(secondBanerRef)}
        >
          About
        </motion.button>
        <motion.button
          className="menu-buttons"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => this.handleNavigation(recipeRef)}
        >
          Recipe
        </motion.button>
        <motion.button
          className="menu-buttons"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => this.handleNavigation(galleryRef)}
        >
          Gallery
        </motion.button>
        <motion.button
          className="menu-buttons"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleMoreView}
        >
          More
        </motion.button>
        <motion.button
          className="menu-buttons"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleRankView}
        >
          Aperol League
        </motion.button>
      </div>
    );
  }
}

export default Menu;
