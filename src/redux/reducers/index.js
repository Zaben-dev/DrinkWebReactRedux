import{combineReducers} from "redux";
import randomDrinksInBoard from "./randomDrinksInBoard";
import userInfo from './userInfo';
import searchResults from './searchResults';
import visibilityFilter from './visibilityFilter';
import comments from './comments';

export default combineReducers({
  randomDrinksInBoard,
  userInfo,
  searchResults,
  visibilityFilter,
  comments
})
