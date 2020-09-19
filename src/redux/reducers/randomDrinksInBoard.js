import {ADD_DRINK_TO_BOARD} from "../actionTypes"

const initialState=[]

function randomDrinksInBoard(state=initialState, action){
  switch(action.type){
    case ADD_DRINK_TO_BOARD:{
      return [...state, action.drink]
    }
    default:{
      return state;
    }
  }
}

export default randomDrinksInBoard;
