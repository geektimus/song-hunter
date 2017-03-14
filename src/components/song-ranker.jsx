import React, { Component } from 'react';
import { Badge, Table } from 'react-bootstrap';

class SongRanker extends Component {

    addVoteTo(evt) {
        let songIndex = parseInt(evt.target.value, 10);
        this.props.handleListUpdates(songIndex);
    }

    render() {
        let songs = this.props.songs.map(
            (song, index) =>
                <tr key={index}>
                    <td><span className="songDesc">{song.name} - <Badge>{song.votes}</Badge></span></td>
                    <td><button className="voter" value={index} onClick={this.addVoteTo.bind(this)}>+</button></td>
                </tr>
        )

        return songs.length > 0 ? <div className="ranking">
            <div className="title">Ranking</div>
            <Table striped responsive>
                <thead>
                    <tr>
                        <th style={{ textAlign: "center" }}>Song - Votes</th>
                        <th style={{ textAlign: "center" }}>Vote</th>
                    </tr>
                </thead>
                <tbody>
                    {songs}
                </tbody>
            </Table>
        </div> : null;
    }
}

export default SongRanker;