import {ADD_DRINK_TO_BOARD, REFRESH_DRINKS_IN_BOARD} from "redux/actionTypes"

const initialState=[]

function randomDrinksInBoard(state = initialState, action){
  switch(action.type){
    case ADD_DRINK_TO_BOARD:{
      return [...state, action.drink];
    }
    case REFRESH_DRINKS_IN_BOARD:{
      return initialState;
    }
    default:{
      return state;
    }
  }
}

export default randomDrinksInBoard;
