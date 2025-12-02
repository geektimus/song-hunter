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
                    className="theme-surface rounded-2xl shadow-xl p-8 theme-border hover:shadow-2xl transition-all duration-300 border"
                >
                    <div className="flex items-center space-x-2 mb-6">
                        <span className="text-2xl">➕</span>
                        <label className="theme-text text-lg font-bold">
                            Add song to the voting list
                        </label>
                    </div>
                    <div className="space-y-5">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Enter song name..."
                                ref={this.songNameRef}
                                className="w-full px-5 py-4 border-2 rounded-xl focus:outline-none focus:ring-2 transition-all duration-200 placeholder-gray-400"
                                style={{
                                    borderColor: 'var(--color-border)',
                                    color: 'var(--color-text)',
                                    backgroundColor: 'var(--color-surface)',
                                }}
                                onFocus={(e) => {
                                    e.target.style.borderColor = 'var(--color-primary)';
                                    e.target.style.boxShadow = '0 0 0 3px rgba(var(--color-primary-rgb, 59, 130, 246), 0.1)';
                                }}
                                onBlur={(e) => {
                                    e.target.style.borderColor = 'var(--color-border)';
                                    e.target.style.boxShadow = 'none';
                                }}
                            />
                        </div>
                        <button 
                            type="submit" 
                            className="text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 w-full"
                            style={{
                                background: 'linear-gradient(to right, var(--color-primary), var(--color-primary-hover, var(--color-primary)))',
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.background = 'linear-gradient(to right, var(--color-primary-hover, var(--color-primary)), var(--color-primary))';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.background = 'linear-gradient(to right, var(--color-primary), var(--color-primary-hover, var(--color-primary)))';
                            }}
                        >
                            <span className="flex items-center justify-center space-x-2">
                                <span>Add Song</span>
                                <span>🎶</span>
                            </span>
                        </button>
                        <p className="text-sm theme-text-secondary text-center flex items-center justify-center space-x-1">
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