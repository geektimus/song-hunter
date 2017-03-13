import React, { Component } from 'react';
import SongAdder from './components/songs-adder';
import SongRanker from './components/song-ranker';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {songs: []}
  }

  songWillBeAdded(songName) {
    console.log("A song will be added to the vote list.", songName)
    let songs = [...this.state.songs,songName]
    this.setState({songs: songs})
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to the Song Hunter</h2>
        </div>
        <SongAdder handleSong={this.songWillBeAdded.bind(this)}/>
        <SongRanker songs={this.state.songs}/>
      </div>
    );
  }
}

export default App;
