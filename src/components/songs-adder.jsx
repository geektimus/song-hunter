import React, { Component } from 'react';
import { Form, ControlLabel, FormGroup, FormControl, HelpBlock, Button } from 'react-bootstrap';

/**
 * Component to add songs to the list, It should contain a input field and a button.
 */
class SongAdder extends Component {

    constructor(props) {
        super(props);
        this.state = { songName: "" };
    }

    getValidationState() {
        const length = this.state.songName.length;
        if (length > 5) return 'success';
        else if (length > 3) return 'warning';
        else if (length > 0) return 'error';
    }

    handleSongNameUpdate(evt) {
        this.setState({ songName: evt.target.value });
    }

    songWillBeAdded() {
        let songName = this.state.songName.trim();
        if (songName !== "") {
            this.setState({ songName: "" });
            this.props.handleSong({ name: songName, votes: 1 });
        }
    }

    render() {
        return <Form className="songAdder">
            <FormGroup
                controlId="songAdder"
                validationState={this.getValidationState()}
            >
                <ControlLabel>Add song to the voting list</ControlLabel>
                <FormControl
                    type="text"
                    value={this.state.songName}
                    placeholder="Please type the song's name"
                    onChange={this.handleSongNameUpdate.bind(this)}
                />
                <Button bsStyle="primary" type="button" onClick={this.songWillBeAdded.bind(this)}>
                    Add Song
                </Button>
                <FormControl.Feedback />
                <HelpBlock>The song's name should be longer than 3 letters</HelpBlock>
            </FormGroup>
        </Form>
    }
}

export default SongAdder;