const initialState = {
    songs: []
}

const songs = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_SONG':
            console.log('Adding song: ', action.song.name);
            return Object.assign({}, state, { songs: [action.song, ...state.songs] });
        // This should be on a separated file for the vote's reducers.
        case 'ADD_VOTE':
            let song = state.songs.filter(song => song.id === action.songId);
            console.log("Adding vote to song: ", song[0].name);

            return state;
        default:
            return state;
    }
}

export default songs;