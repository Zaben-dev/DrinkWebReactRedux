import React from 'react';
import firebase from '../firebase';
import 'firebase/auth';
import{TOGGLE_LOGIN} from "../redux/actionTypes"
import{connect} from 'react-redux'

function AuthenticationProvider(props){

    function handleClick(){
            
        firebase.auth().signInWithPopup(props.provider).then(function(result) {
            window.localStorage.setItem('isLogged', "true");
            props.toggleLogin();
            var user = firebase.auth().currentUser;

            if (user) {
              console.log("zalogowany"+user.displayName)
            } else {
                console.log("niezalogowany")
            }
            

        }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
        });
          
    }
    
    return(
        <div>
            <button onClick={handleClick}>{props.providerName}</button>
        </div>
    )
}

const mapDispatchToProps=dispatch=>{
    return{
        toggleLogin:()=>dispatch({type: TOGGLE_LOGIN})
    }
}

export default connect(null, mapDispatchToProps)(AuthenticationProvider);