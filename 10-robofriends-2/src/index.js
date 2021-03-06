import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { searchRobots, requestRobots } from './reducers';

import App from './containers/App';
import './index.css';
import 'tachyons';
import { createLogger } from 'redux-logger';

import thunkMiddleware from 'redux-thunk';

const logger = createLogger();

// create the Store - createStore(rootReducer), we want to combine all the reducers to create one rootReducer
const rootReducer = combineReducers({ searchRobots, requestRobots });
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);

// Provider - used to pass down the store to the tree, instead of passing the store to each component manually.
// Provider - is gonna take care of passing down the store to all the components down the component tree from the App, and we will use connect to finish this connection
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
