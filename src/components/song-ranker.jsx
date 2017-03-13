import React, { Component } from 'react';

class SongRanker extends Component {

    addVoteTo(evt) {
        let songIndex = parseInt(evt.target.value, 10);
        this.props.handleListUpdates(songIndex);
    }

    render() {
        let songs = this.props.songs.map(
            (song, index) => 
                <li key={index}>
                    <span className="songDesc">{song.name} - <span className="votes">{song.votes}</span></span>
                    <button className="voter" value={index} onClick={this.addVoteTo.bind(this)}>👍🏻</button>
                </li>
                
        )

        return <div className="ranking">
            <div className="title">Ranking</div>
            <ul>
            {songs}
            </ul>
        </div>
        
    }
}

export default SongRanker;