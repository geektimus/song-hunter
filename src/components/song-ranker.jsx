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
                <tr key={song.id} className="hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 transition-all duration-200 group">
                    <td className="px-8 py-5">
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold shadow-md">
                                    {index + 1}
                                </div>
                            </div>
                            <div className="flex-1 min-w-0">
                                <span className="text-gray-900 font-semibold text-lg group-hover:text-blue-700 transition-colors">
                                    {song.name}
                                </span>
                            </div>
                            <div className="flex-shrink-0">
                                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-bold bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md">
                                    <span className="mr-1">👆</span>
                                    {song.votes}
                                </span>
                            </div>
                        </div>
                    </td>
                    <td className="px-8 py-5 whitespace-nowrap text-center">
                        <button 
                            className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 border-2 border-blue-400 rounded-xl text-white font-bold text-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-110 hover:-translate-y-1 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                    <div className="px-8 py-6 bg-gradient-to-r from-gray-50 to-blue-50 border-b border-gray-200">
                        <div className="flex items-center space-x-3">
                            <span className="text-3xl">🏆</span>
                            <h2 className="text-2xl font-bold text-gray-800">Ranking</h2>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-8 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                                        Song / Votes
                                    </th>
                                    <th className="px-8 py-4 text-center text-xs font-bold text-gray-600 uppercase tracking-wider">
                                        Vote
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-100">
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