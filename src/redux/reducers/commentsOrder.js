import { commentsOrderTypes } from 'redux/actions';
import { SET_COMMENTS_ORDER } from 'redux/actionTypes';

function commentsOrder(state = commentsOrderTypes.NEWEST_TO_OLDEST, action){
  switch(action.type){
    case SET_COMMENTS_ORDER:
      return action.order;
    default:
      return state;
  }
}

export default commentsOrder;
