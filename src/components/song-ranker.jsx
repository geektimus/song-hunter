import React, { Component } from 'react';

class SongRanker extends Component {

    compare(song_a,song_b) {
        if (song_b.votes < song_a.votes)
            return -1;
        if (song_b.votes > song_a.votes)
            return 1;
        return 0;
    }

    addVoteTo(evt) {
        let songIndex = parseInt(evt.target.value, 10);
        
        let songs = this.props.songs.map((song, index) => {
            if (index === songIndex) {
                console.log("adding vote to: ", song.name)
                song.votes++
            }
            return song
        }).sort(this.compare);

        this.props.handleListUpdates(songs);
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