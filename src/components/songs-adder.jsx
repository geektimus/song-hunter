import React, { Component } from 'react';

import * as SongActions from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import uuid from 'uuid';

/**
 * Component to add songs to the list, It should contain a input field and a button.
 */
class SongAdder extends Component {

    handleSubmit(evt) {
        evt.preventDefault();
        let refs = this.refs;
        let songName = refs.songName.value;

        // Avoid empty song names.
        if (songName !== undefined && songName.trim().length === 0) {
            refs.songForm.reset();
            return false;
        }

        // Validate if the song already exists on the list.
        let song = this.props.songs.filter(song => song.name === songName.trim())[0];

        // Trigger actions
        if (song) {
            this.props.addVote(song.id);
        } else {
            this.props.addSong({ id: uuid.v1(), name: songName, votes: 1 });
        }

        // Reset Form
        refs.songForm.reset();
    }

    render() {
        return (
            <form ref="songForm" onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group has-feedback">
                    <label className="control-label">Add song to the voting list</label>
                    <input
                        type="text"
                        placeholder="Please type the song's name"
                        id="songName"
                        ref="songName"
                        className="form-control" />
                    <button type="submit" className="btn btn-primary">Add Song</button>
                    <br />
                    <span className="help-block">The song's name should be longer than 3 letters</span>
                </div>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return { songs: state.songList.songs }
}
const mapDispatchToProps = dispatch => bindActionCreators(SongActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SongAdder);