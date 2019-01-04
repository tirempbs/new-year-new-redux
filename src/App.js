import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import ConnectedMyInputs from './components/MyInputs';
import './App.css';

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