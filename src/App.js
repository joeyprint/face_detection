import React, { Component } from 'react'
import './App.css'
import Webcam from "react-webcam";

const camera = {
  transform : 'rotateY(180deg)'
};
class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <Webcam 
            style={camera}
          />
        </header>
      </div>
    );
  }
}

export default App;
