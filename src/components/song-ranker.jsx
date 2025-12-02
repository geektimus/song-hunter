import React, { Component } from 'react';

import * as SongActions from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class SongRanker extends Component {

    addVoteTo(evt) {
        let songId = evt.target.value;
        this.props.addVote(songId);
    }

    render() {
        // Sort songs by votes (descending)
        const sortedSongs = [...this.props.songs].sort((a, b) => b.votes - a.votes);

        let songs = sortedSongs.map(
            (song, index) =>
                <tr key={song.id} className="hover:opacity-90 transition-all duration-200 group theme-surface" style={{ backgroundColor: 'var(--color-surface)' }}>
                    <td className="px-8 py-5">
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <div 
                                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shadow-md"
                                    style={{
                                        background: 'linear-gradient(to bottom right, var(--color-primary), var(--color-primary-hover, var(--color-primary)))',
                                    }}
                                >
                                    {index + 1}
                                </div>
                            </div>
                            <div className="flex-1 min-w-0">
                                <span 
                                    className="font-semibold text-lg transition-colors"
                                    style={{ color: 'var(--color-text)' }}
                                >
                                    {song.name}
                                </span>
                            </div>
                            <div className="flex-shrink-0">
                                <span 
                                    className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-bold text-white shadow-md"
                                    style={{
                                        background: 'linear-gradient(to right, var(--color-badge), var(--color-badge-dark, var(--color-badge)))',
                                    }}
                                >
                                    <span className="mr-1">👆</span>
                                    {song.votes}
                                </span>
                            </div>
                        </div>
                    </td>
                    <td className="px-8 py-5 whitespace-nowrap text-center">
                        <button 
                            className="border-2 rounded-xl text-white font-bold text-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-110 hover:-translate-y-1 active:scale-95 focus:outline-none focus:ring-2 w-12 h-12"
                            style={{
                                background: 'linear-gradient(to bottom right, var(--color-primary), var(--color-primary-hover, var(--color-primary)))',
                                borderColor: 'var(--color-primary)',
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.opacity = '0.9';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.opacity = '1';
                            }}
                            value={song.id} 
                            onClick={this.addVoteTo.bind(this)}
                            aria-label={`Vote for ${song.name}`}
                        >
                            +
                        </button>
                    </td>
                </tr>
        )

        return songs.length > 0 ? (
            <div className="max-w-5xl mx-auto animate-fade-in">
                <div className="theme-surface rounded-2xl shadow-xl overflow-hidden theme-border border">
                    <div className="px-8 py-6 theme-background border-b theme-border-dark" style={{ background: 'linear-gradient(to right, var(--color-background), var(--color-background-secondary))' }}>
                        <div className="flex items-center space-x-3">
                            <span className="text-3xl">🏆</span>
                            <h2 className="text-2xl font-bold theme-text">Ranking</h2>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y" style={{ '--divide-color': 'var(--color-border)' }}>
                            <thead className="theme-background" style={{ backgroundColor: 'var(--color-background)' }}>
                                <tr>
                                    <th className="px-8 py-4 text-left text-xs font-bold theme-text-secondary uppercase tracking-wider">
                                        Song / Votes
                                    </th>
                                    <th className="px-8 py-4 text-center text-xs font-bold theme-text-secondary uppercase tracking-wider">
                                        Vote
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="theme-surface divide-y" style={{ '--divide-color': 'var(--color-border)' }}>
                                {songs}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        ) : null;
    }
}

const mapStateToProps = (state) => {
    return { songs: state.songList.songs }
}
const mapDispatchToProps = dispatch => bindActionCreators(SongActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SongRanker);