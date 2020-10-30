import { VisibilityFilters } from 'redux/actions';
import { SET_VISIBILITY_FILTER } from 'redux/actionTypes';

const initialState = VisibilityFilters.SHOW_ALL;

function visibilityFilter(state = initialState, action){
  switch(action.type){
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

export default visibilityFilter;
