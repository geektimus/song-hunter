import React, { Component } from 'react';
import { Badge, Table } from 'react-bootstrap';

import * as SongActions from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class SongRanker extends Component {

    addVoteTo(evt) {
        let songId = evt.target.value;
        this.props.addVote(songId);
    }

    render() {
        let songs = this.props.songs.map(
            song =>
                <tr key={song.id}>
                    <td><span className="songDesc">{song.name} - <Badge>{song.votes}</Badge></span></td>
                    <td><button className="voter" value={song.id} onClick={this.addVoteTo.bind(this)}>+</button></td>
                </tr>
        )

        return songs.length > 0 ? <div className="ranking">
            <div className="title">Ranking</div>
            <Table striped responsive>
                <thead>
                    <tr>
                        <th style={{ textAlign: "center" }}>Song / Votes</th>
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

const mapStateToProps = (state) => {
    return {
        songs: state.songList.songs
    }
}
const mapDispatchToProps = dispatch => bindActionCreators(SongActions, dispatch);

const newSongRanker = connect(
    mapStateToProps, mapDispatchToProps)(SongRanker)

export default newSongRanker;