import React, { Component } from 'react';

import * as SongActions from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/**
 * Component to add songs to the list, It should contain a input field and a button.
 */
class SongAdder extends Component {

    constructor(props) {
        super(props);
        this.state = { songName: "" };
    }

    handleSubmit(evt) {
        evt.preventDefault();
        let refs = this.refs;
        let songName = refs.songName.value;

        // Trigger actions
        this.props.addSong({name: songName, votes: 1});

        // Reset Form
        refs.songForm.reset();
    }

    songWillBeAdded() {
        let songName = this.state.songName.trim();
        if (songName !== "") {
            this.setState({ songName: "" });
            this.props.handleSong({ name: songName, votes: 1 });
        }
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
                <span className="help-block">The song's name should be longer than 3 letters</span>
            </div>
        </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        songs: state.songList.songs
    }
}
const mapDispatchToProps = dispatch => bindActionCreators(SongActions, dispatch);

const newSongAdder = connect(
    mapStateToProps, mapDispatchToProps)(SongAdder)

export default newSongAdder;