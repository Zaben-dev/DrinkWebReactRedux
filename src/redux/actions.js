import {SET_USER_INFO, ADD_DRINK_TO_DISPLAY, ADD_DRINK_TO_BOARD, CLEAR_ACTUALLY_DIPLAYING_DRINK, REFRESH_DRINKS_IN_BOARD} from "./actionTypes";

export function setUserInfo(userInfo){
  return{
    type: SET_USER_INFO,
    userInfo
  }
}

export function addDrinkToBoard(drink){
  return{
    type: ADD_DRINK_TO_BOARD,
    drink
  }
}

export function refreshDrinksInBoard(drink){
  return{
    type: REFRESH_DRINKS_IN_BOARD,
  }
}

export function addDrinkToDisplay(drink){
  return{
    type: ADD_DRINK_TO_DISPLAY,
    drink
  }
}

export function clearActuallyDisplayingDrink(){
  return{
    type: CLEAR_ACTUALLY_DIPLAYING_DRINK
  }
}
