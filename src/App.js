import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const MyInputs = props => (
  <div className="App">
    <h1 className="header">Your input:</h1>
    <input className="input" type='text' onChange={props.handleChange} value={props.text} />
    <h1 className="header">Your output: <br />{props.text}</h1>
  </div>
)

class App extends Component {
  state = {
    text: ''
  }

  handleChange = (event) => {
    this.setState({text: event.target.value})
  }

  render() {
    return (
      <MyInputs handleChange={this.handleChange} text={this.state.text} />
    );
  }
}

export default App;
