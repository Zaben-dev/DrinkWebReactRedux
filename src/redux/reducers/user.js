import { SET_USER_INFO, CLEAR_USER_INFO } from "redux/actionTypes"

const initialState = {};

function user(state = initialState, action){
  switch(action.type){
    case SET_USER_INFO:
      return action.user;
    case CLEAR_USER_INFO:
      return initialState;
    default:
      return state;
  }
}

export default user;

