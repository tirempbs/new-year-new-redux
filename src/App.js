import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import './App.css';

const UPDATE_TEXT = 'UPDATE_TEXT'

function textReducer(state='', action) {
  switch (action.type) {
    case UPDATE_TEXT:
      return action.payload;
    default:
      return state;
  }
}

function mapStateToProps(state) {
  return {
    text: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleInputUpdate: event => dispatch({type: UPDATE_TEXT, payload: event.target.value})
  }
}

const store = createStore(textReducer)

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

const ConnectedMyInputs = connect(mapStateToProps, mapDispatchToProps)(MyInputs);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedMyInputs />
      </Provider>
    );
  }
}

export default App;