import React, { Component } from 'react';

class SongRanker extends Component {

    render() {
        let songs = this.props.songs.map((song, index) => <li key={index}>{song.name} - {song.votes}</li>)
        return <div className="ranking">
            <div className="title">Ranking</div>
            <ul>
            {songs}
            </ul>
        </div>
        
    }
}

export default SongRanker;