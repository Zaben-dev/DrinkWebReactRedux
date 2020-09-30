import {ADD_SEARCH_RESULTS, SET_USER_INFO, ADD_DRINK_TO_BOARD, REFRESH_DRINKS_IN_BOARD, SET_VISIBILITY_FILTER} from "./actionTypes";

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

export function addSearchResults(results){
  return{
    type: ADD_SEARCH_RESULTS,
    results
  }
}

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_NON_ALCOHOLIC: 'SHOW_NON_ALCOHOLIC',
  SHOW_ALCOHOLIC: 'SHOW_ALCOHOLIC'
}
