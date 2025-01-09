import './App.css';
import React, { Component } from 'react';
import { motion } from "framer-motion";
import './Menu.css';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='menu'>
        <motion.button
          className='menu-buttons'
          whileHover={{ scale: 1.1 }}      
          whileTap={{ scale: 0.95 }}   
        >
          About
        </motion.button>
        <motion.button
          className='menu-buttons'
          whileHover={{ scale: 1.1 }}      
          whileTap={{ scale: 0.95 }}   
        >
          Blog
        </motion.button>
        <motion.button
          className='menu-buttons'
          whileHover={{ scale: 1.1 }}      
          whileTap={{ scale: 0.95 }}   
        >
          Przepisy
        </motion.button>
        <motion.button
          className='menu-buttons'
          whileHover={{ scale: 1.1 }}      
          whileTap={{ scale: 0.95 }}   
        >
          Zdjęcia
        </motion.button>
        <motion.button
          className='menu-buttons'
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
