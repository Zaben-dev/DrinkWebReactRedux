import {ADD_DRINK} from "../actionTypes"

const initialState=[]

function randomDrinksInBoard(state=initialState, action){
  switch(action.type){
    case ADD_DRINK:{
      return [...state, action.drink]
    }
    default:{
      return state;
    }
  }
}

export default randomDrinksInBoard;
