import React, { Component } from 'react'
import './App.css'
// import Webcam from 'react-webcam'
import Face from './component/face'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <Face />
        </header>
      </div>
    );
  }
}

export default App;
