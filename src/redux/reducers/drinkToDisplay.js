import {ADD_DRINK_TO_DISPLAY, CLEAR_ACTUALLY_DIPLAYING_DRINK} from "../actionTypes"

const initialState={
  drink: {}
};

function drinkToDisplay(state=initialState, action){
  switch(action.type){
    case ADD_DRINK_TO_DISPLAY:{
      return {...state, drink: action.drink}
    }
    case CLEAR_ACTUALLY_DIPLAYING_DRINK:{
      return { drink:{} }
    }
    default:{
      return state;
    }
  }
}

export default drinkToDisplay;
