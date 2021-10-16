import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// import the Provider
import { Provider } from "react-redux";
//import the store
import Store from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store= {Store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

