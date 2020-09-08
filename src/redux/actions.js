import {SET_USER_INFO} from "./actionTypes";
import {ADD_DRINK} from "./actionTypes";

export function setUserInfo(userInfo){
  return{
    type: SET_USER_INFO,
    userInfo
  }
}

export function addDrinkToBoard(drink){
  return{
    type: ADD_DRINK,
    drink
  }
}
