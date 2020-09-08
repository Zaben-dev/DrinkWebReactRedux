import{combineReducers} from "redux";
import randomDrinksInBoard from "./randomDrinksInBoard";
import userInfo from './userInfo';

export default combineReducers({
 randomDrinksInBoard,
 userInfo
})
