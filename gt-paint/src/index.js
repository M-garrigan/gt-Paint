import React from 'react';
import { render } from 'react-dom';
import{ Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import gtReducer from './reducers/gtReducer.js';
import './index.css';
import App from './App.js';

export const store = createStore(
  gtReducer, 
  applyMiddleware(thunk)
);

export const ProviderApp = <Provider store={store}><App /></Provider>;

export default render(
  <Provider store={store}><App /></Provider>
  , document.getElementById('root') || document.createElement('div')
);