import { ADD_COMMENT, REFRESH_COMMENTS } from 'redux/actionTypes';

const initialState=[]

function comments(state = initialState, action){
  switch(action.type){
    case ADD_COMMENT:
      return  [...state, action.comment];
    case REFRESH_COMMENTS:
      return initialState;
    default:
      return state;
  }
}

export default comments;
