const compare = (song_a, song_b) => {
    if (song_b.votes < song_a.votes) {
        return -1;
    }
    if (song_b.votes > song_a.votes) {
        return 1;
    }
    return 0;
}

export default compare;