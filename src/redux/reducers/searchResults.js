import {ADD_SEARCH_RESULTS} from '../actionTypes';

const initialState={
  results: {}
}

function searchResults(state=initialState, action){
  switch(action.type){
    case ADD_SEARCH_RESULTS:{
      return {...state, results: action.results}
    }
    default:{
      return state;
    }
  }
}

export default searchResults;
