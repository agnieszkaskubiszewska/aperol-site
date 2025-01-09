import './App.css';
import React, { Component } from 'react';
import Menu from './Menu';
import Footer from './Footer';
import ReactCurvedText from 'react-curved-text';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Menu />
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
        <div className="second-ball"></div>
        <Footer />
      </div>
    );
  }
}

export default App;
