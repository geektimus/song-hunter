import React, { Component } from 'react';

/**
 * Component to add songs to the list, It should contain a input field and a button.
 */
class SongAdder extends Component {

    constructor(props) {
        super(props);
        this.state = {songName: ""}
    }

    handleSongNameUpdate(evt) {
        this.setState({songName: evt.target.value})
    }

    songWillBeAdded() {
        console.log("A song will be added to the vote list.", this.state.songName)
        console.info("Clearing input field");
        this.setState({songName: ""})
    }

    render() {
        return <div className="songAdder">
            <input 
                placeholder="Please type the song's name" 
                name="songName" 
                value={this.state.songName} 
                onChange={this.handleSongNameUpdate.bind(this)} 
                className="large-input-text"/>
            <button type="button" name="addSong" onClick={this.songWillBeAdded.bind(this)}>Add!</button>
        </div>
    }
}

export default SongAdder;