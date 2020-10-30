import { ADD_SEARCH_RESULTS } from 'redux/actionTypes';

const initialState = {};

function searchResults(state = initialState, action){
  switch(action.type){
    case ADD_SEARCH_RESULTS:
      return action.results;
    default:
      return state;
  }
}

export default searchResults;
