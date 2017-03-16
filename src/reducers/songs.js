const initialState = {
    songs: []
}

const compare = (song_a, song_b) => {
    if (song_b.votes < song_a.votes) {
        return -1;
    }
    if (song_b.votes > song_a.votes) {
        return 1;
    }
    return 0;
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