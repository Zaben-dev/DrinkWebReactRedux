import { combineReducers } from "redux";
import randomDrinksInBoard from "redux/reducers/randomDrinksInBoard";
import user from 'redux/reducers/user';
import searchResults from 'redux/reducers/searchResults';
import visibilityFilter from 'redux/reducers/visibilityFilter';
import comments from 'redux/reducers/comments';
import commentsOrder from 'redux/reducers/commentsOrder'

export default combineReducers({
  randomDrinksInBoard,
  user,
  searchResults,
  visibilityFilter,
  comments,
  commentsOrder
})
