const initialState = {
    songs: []
}

const songs = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_SONG':
            console.log('Adding song action: ', action, action.song.name, action.song.votes);
            return Object.assign({}, state, { songs: [action.song, ...state.songs] });
        default:
            return state;
    }
}

export default songs;