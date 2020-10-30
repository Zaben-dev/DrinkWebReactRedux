import { commentsOrderTypes } from 'redux/actions';
import { SET_COMMENTS_ORDER } from 'redux/actionTypes';

const initialState = commentsOrderTypes.NEWEST_TO_OLDEST;

function commentsOrder(state = initialState, action){
  switch(action.type){
    case SET_COMMENTS_ORDER:
      return action.order;
    default:
      return state;
  }
}

export default commentsOrder;
