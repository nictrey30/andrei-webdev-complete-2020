import { apiCall } from './api/api';
import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants';

const setSearchField = (text) => {
  return {
    type: CHANGE_SEARCH_FIELD, // we gonna care about CHANGE_SEARCH_FIELD in searchRobots reducer
    payload: text
  };
};
const requestRobots = () => (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  apiCall('https://jsonplaceholder.typicode.com/users')
    .then((data) => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
    .catch((error) =>
      dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error })
    );
};

export { setSearchField, requestRobots };
