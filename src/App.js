import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    text: ''
  }

  handleChange = (event) => {
    this.setState({text: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <h1 className="header">Type here:</h1>
        <input className="input" type='text' onChange={this.handleChange} value={this.state.text} />
        <h1 className="header">Your input: <br/>{this.state.text}</h1>
      </div>
    );
  }
}

export default App;
