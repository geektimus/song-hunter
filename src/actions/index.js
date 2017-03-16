export const addSong = (song) => {
    return {
        type: 'ADD_SONG',
        song: song
    }
}

export const addVote = (songId) => {
    return {
        type: 'ADD_VOTE',
        songId: songId
    }
}