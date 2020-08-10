import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { searchRobots } from './reducers';
import 'tachyons';

// we give the createStore function the root reducer as parameter
const store = createStore(searchRobots);

// with connect we tell React which componets should be smart aka aware of the changes in the Store

ReactDOM.render(
  // the Provider component passes down the store
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
