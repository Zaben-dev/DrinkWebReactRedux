import{combineReducers} from "redux";
import randomDrinksInBoard from "./randomDrinksInBoard";
import userInfo from './userInfo';
import drinkToDisplay from './drinkToDisplay';

export default combineReducers({
 randomDrinksInBoard,
 userInfo,
 drinkToDisplay
})
