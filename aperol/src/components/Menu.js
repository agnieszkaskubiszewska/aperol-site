import './Menu.css';
import React, { Component } from 'react';
import { motion } from "framer-motion";

class Menu extends Component {
  render() {
    const { secondBanerRef } = this.props; 

    return (
      <div className="menu">
        <div className="menu-logo">
          <img src={require("./grf.jpg")} alt="logo" />
        </div>
        <motion.button
          className="menu-buttons"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => secondBanerRef.current.scrollIntoView({ behavior: "smooth" })} 
        >
          About
        </motion.button>
        <motion.button
          className="menu-buttons"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
        >
          Blog
        </motion.button>
        <motion.button
          className="menu-buttons"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Przepisy
        </motion.button>
        <motion.button
          className="menu-buttons"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Zdjęcia
        </motion.button>
        <motion.button
          className="menu-buttons"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Mapa
        </motion.button>
      </div>
    );
  }
}

export default Menu;
