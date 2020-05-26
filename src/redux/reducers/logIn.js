import{TOGGLE_LOGIN} from "../actionTypes"

const initialState={
    isLogged: false,
}

const LogInReducer = (state=initialState, action)=>{
    switch(action.type){
        case TOGGLE_LOGIN:{
            return Object.assign({}, state, {
                isLogged: !state.isLogged
            })
        }
        default:{
            return state;
        }
    }
}

export default LogInReducer;