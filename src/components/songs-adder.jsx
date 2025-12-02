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
            <div className="max-w-2xl mx-auto mb-10 animate-fade-in">
                <form 
                    ref={this.songFormRef} 
                    onSubmit={this.handleSubmit.bind(this)} 
                    className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300"
                >
                    <div className="flex items-center space-x-2 mb-6">
                        <span className="text-2xl">➕</span>
                        <label className="text-gray-800 text-lg font-bold">
                            Add song to the voting list
                        </label>
                    </div>
                    <div className="space-y-5">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Enter song name..."
                                ref={this.songNameRef}
                                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-gray-800 placeholder-gray-400 hover:border-gray-300"
                            />
                        </div>
                        <button 
                            type="submit" 
                            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0"
                        >
                            <span className="flex items-center justify-center space-x-2">
                                <span>Add Song</span>
                                <span>🎶</span>
                            </span>
                        </button>
                        <p className="text-sm text-gray-500 text-center flex items-center justify-center space-x-1">
                            <span>ℹ️</span>
                            <span>The song's name should be longer than 3 letters</span>
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