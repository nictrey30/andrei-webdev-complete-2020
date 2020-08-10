import { CHANGE_SEARCH_FIELD } from './constants';

const setSearchField = (text) => {
  return {
    type: CHANGE_SEARCH_FIELD, // we gonna care about CHANGE_SEARCH_FIELD in searchRobots reducer
    payload: text
  };
};

export { setSearchField };
