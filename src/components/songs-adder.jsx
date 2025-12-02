import React, { Component } from 'react';

import * as SongActions from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Using built-in crypto.randomUUID() instead of uuid package

/**
 * Component to add songs to the list, It should contain a input field and a button.
 */
class SongAdder extends Component {

    constructor(props) {
        super(props)

        this.songFormRef = React.createRef();
        this.songNameRef = React.createRef();
    }

    handleSubmit(evt) {
        evt.preventDefault();
        
        let songName = this.songNameRef.current.value;

        if (songName === "") return

        // Avoid empty song names.
        if (songName !== undefined && songName.trim().length === 0) {
            this.songForm.reset();
            return false;
        }

        // Validate if the song already exists on the list.
        let song = this.props.songs.filter(song => song.name === songName.trim())[0];

        // Trigger actions
        if (song) {
            this.props.addVote(song.id);
        } else {
            this.props.addSong({ id: window.crypto.randomUUID(), name: songName, votes: 1 });
        }

        // Reset Form
        this.songFormRef.current.reset();
    }

    render() {
        return (
            <div className="max-w-2xl mx-auto mb-8">
                <form ref={this.songFormRef} onSubmit={this.handleSubmit.bind(this)} className="bg-white rounded-lg shadow-md p-6">
                    <label className="block text-gray-700 text-sm font-semibold mb-2">
                        Add song to the voting list
                    </label>
                    <div className="space-y-4">
                        <input
                            type="text"
                            placeholder="Please type the song's name"
                            ref={this.songNameRef}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        />
                        <button 
                            type="submit" 
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                        >
                            Add Song
                        </button>
                        <p className="text-sm text-gray-500 text-center">
                            The song's name should be longer than 3 letters
                        </p>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { songs: state.songList.songs }
}
const mapDispatchToProps = dispatch => bindActionCreators(SongActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SongAdder);