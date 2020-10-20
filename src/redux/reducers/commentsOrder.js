import { commentsOrderTypes } from '../actions';
import { SET_COMMENTS_ORDER } from '../actionTypes';

function commentsOrder(state = commentsOrderTypes.NEWEST_TO_OLDEST, action){
  switch(action.type){
    case SET_COMMENTS_ORDER:
      return action.order;
    default:
      return state;
  }
}

export default commentsOrder;
