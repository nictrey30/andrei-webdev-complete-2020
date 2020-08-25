import { CHANGE_SEARCH_FIELD } from './constants';

// actions are just objects that we are returning
const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

export { setSearchField };
