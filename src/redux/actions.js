import { ADD_SEARCH_RESULTS, SET_USER_INFO, CLEAR_USER_INFO, ADD_DRINK_TO_BOARD, REFRESH_DRINKS_IN_BOARD, SET_VISIBILITY_FILTER, ADD_COMMENT, REFRESH_COMMENTS, SET_COMMENTS_ORDER } from "redux/actionTypes";

export function setUser(user){
  return{
    type: SET_USER_INFO,
    user
  }
}

export function clearUser(){
  return{
    type: CLEAR_USER_INFO
  }
}

export function addDrinkToBoard(drink){
  return{
    type: ADD_DRINK_TO_BOARD,
    drink
  }
}

export function refreshDrinksInBoard(){
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

export function setVisibilityFilter(filter){
  return{
    type: SET_VISIBILITY_FILTER,
    filter
  }
}

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_NON_ALCOHOLIC: 'SHOW_NON_ALCOHOLIC',
  SHOW_ALCOHOLIC: 'SHOW_ALCOHOLIC'
}

export function addComment(comment){
  return{ 
    type: ADD_COMMENT,
    comment
  }
}

export function refreshComments(){
  return{
    type: REFRESH_COMMENTS
  }
}

export function setCommentsOrder(order){
  return{
    type: SET_COMMENTS_ORDER,
    order
  }
}

export const commentsOrderTypes = {
  NEWEST_TO_OLDEST: 'NEWEST_TO_OLDEST',
  OLDEST_TO_NEWEST: 'OLDEST_TO_NEWEST'
}



