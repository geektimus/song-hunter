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
            song =>
                <tr key={song.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-gray-900 font-medium">{song.name}</span>
                        <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {song.votes}
                        </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                        <button 
                            className="w-10 h-10 bg-white border-2 border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-500 text-gray-700 font-bold text-lg transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
                            value={song.id} 
                            onClick={this.addVoteTo.bind(this)}
                        >
                            +
                        </button>
                    </td>
                </tr>
        )

        return songs.length > 0 ? (
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                        <h2 className="text-xl font-bold text-gray-800">Ranking</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Song / Votes
                                    </th>
                                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Vote
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
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