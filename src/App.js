import React, { Component } from 'react';
import SongAdder from './components/songs-adder'
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor() {
    }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to the Song Hunter</h2>
        </div>
        <SongAdder />
      </div>
    );
  }
}

export default App;
