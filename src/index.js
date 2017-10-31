import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import thunk from 'redux-thunk'
import App from './App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux'
import {reducer} from './reducers/reducer.js'
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));


registerServiceWorker();
