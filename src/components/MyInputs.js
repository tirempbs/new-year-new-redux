import React from 'react';
import { connect } from 'react-redux';

const UPDATE_TEXT = 'UPDATE_TEXT';

const MyInputs = props => (
    <div className="App">
        <h1 className="header">Your input:</h1>
        <input
            className="input"
            type='text'
            onChange={props.handleInputUpdate}
            value={props.text} />
        <h1 className="header">Your output: <br />{props.text}</h1>
    </div>
)

function mapStateToProps(state) {
    return {
        text: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleInputUpdate: event => dispatch({ type: UPDATE_TEXT, payload: event.target.value })
    }
}

const ConnectedMyInputs = connect(mapStateToProps, mapDispatchToProps)(MyInputs);

export default ConnectedMyInputs