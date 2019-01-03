import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Create the store and add it to the Provider

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);

serviceWorker.unregister();
