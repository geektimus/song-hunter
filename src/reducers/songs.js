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
            songs = state.songs.map(song => {
                if (song.id === action.songId) {
                    console.log("Adding vote to: ", song.name);
                    song.votes++;
                }
                return song;
            }).sort(compare);

            return Object.assign({}, state, { songs: songs });
        default:
            return state;
    }
}

export default songs;