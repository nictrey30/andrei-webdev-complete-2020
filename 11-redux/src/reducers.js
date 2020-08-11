import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants';

// a reducer is a big function that reads the action and spits out state

// Principle 1: Single source of truth
const initialStateSearch = {
  searchField: ''
};

// searchRobots reducer, that will take 2 args: state and action
// using default paramaters
const searchRobots = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      // Principle 2: State is read only, that means we can never modify that obj, the only thing we can do is create a new object
      // Principle 3: Changes using pure functions - functions that get some input and return an output that doesn't have any side effects, it always gives the same output given the same input
      // return Object.assign({}, state, { searchField: action.payload });
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

const initialStateRobots = {
  isPending: false,
  robots: [],
  error: ''
};

const requestRobots = (state = initialStateRobots, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return { ...state, isPending: true };
    case REQUEST_ROBOTS_SUCCESS:
      return { ...state, isPending: false, robots: action.payload };
    case REQUEST_ROBOTS_FAILED:
      return { ...state, isPending: false, error: action.payload };
    default:
      return state;
  }
};

export { searchRobots, requestRobots };
