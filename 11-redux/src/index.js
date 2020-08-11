import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { searchRobots, requestRobots } from './reducers';
import 'tachyons';

// we give the createStore function the root reducer as parameter
const logger = createLogger();

// combineReducers will accept in object form all the reducers
const rootReducer = combineReducers({ searchRobots, requestRobots });
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);
// with connect we tell React which componets should be smart aka aware of the changes in the Store

// redux-thunk is a middleware that waits and sees if any action returns a function instead of an object
// if redux-thunk sees an action it will going to act upon it
ReactDOM.render(
  // the Provider component passes down the store
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
