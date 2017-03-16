import compare from '../utils/SongUtils'

const initialState = {
    songs: []
}

const songs = (state = initialState, action) => {
    let songs;
    switch (action.type) {
        case 'ADD_SONG':
            console.log('Adding song: ', action.song.name);

            songs = [action.song, ...state.songs];
            songs = songs.sort(compare);

            return Object.assign({}, state, { songs: songs });
        // This should be on a separated file for the vote's reducers.
        case 'ADD_VOTE':
            let song = state.songs.filter(song => song.id === action.songId)[0];
            console.log("Adding vote to song: ", song.name);
            song.votes++;

            songs = state.songs.filter(song => song.id !== action.songId);
            songs.push(song);
            songs.sort(compare);

            return Object.assign({}, state, { songs: songs });
        default:
            return state;
    }
}

export default songs;