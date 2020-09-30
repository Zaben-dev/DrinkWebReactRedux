import{combineReducers} from "redux";
import randomDrinksInBoard from "./randomDrinksInBoard";
import userInfo from './userInfo';
import drinkToDisplay from './drinkToDisplay';
import searchResults from './searchResults';
import visibilityFilter from './visibilityFilter';

export default combineReducers({
  randomDrinksInBoard,
  userInfo,
  drinkToDisplay,
  searchResults,
  visibilityFilter
})
