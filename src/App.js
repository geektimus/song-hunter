import React, { Component } from 'react';
import SongAdder from './components/songs-adder';
import SongRanker from './components/song-ranker';
import MyNavbar from './components/navbar';

import { Grid, Row, Col } from 'react-bootstrap';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = { songs: [] }
  }

  compare(song_a, song_b) {
    if (song_b.votes < song_a.votes)
      return -1;
    if (song_b.votes > song_a.votes)
      return 1;
    return 0;
  }

  songWillBeAdded(newSong) {
    console.log("A song will be added to the vote list.", newSong.name)

    let alreadyAddedSong = this.state.songs.filter(song => song.name === newSong.name);
    if (alreadyAddedSong.length === 0) {
      let songs = [...this.state.songs, newSong]
      this.setState({ songs: songs })
    } else {
      let songs = this.state.songs.map(song => {
        if (song.name === newSong.name) {
          song.votes++;
        }
        return song;
      }).sort(this.compare)
      this.setState({ songs: songs })
    }
  }

  songListShouldBeUpdated(songIndex) {
    let songs = this.state.songs.map((song, index) => {
      if (index === songIndex) {
        console.log("adding vote to: ", song.name)
        song.votes++
      }
      return song
    }).sort(this.compare);
    this.setState({ songs: songs })
  }

  render() {
    return (
      <div className="App">
        <MyNavbar />
        <Grid fluid>
          <Row>
            <Col lg={12} md={12} sm={12}>
              <SongAdder handleSong={this.songWillBeAdded.bind(this)} />
              <SongRanker handleListUpdates={this.songListShouldBeUpdated.bind(this)} songs={this.state.songs} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
