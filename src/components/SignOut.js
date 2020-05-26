import React from 'react';
import firebase from '../firebase';
import 'firebase/auth';
import{TOGGLE_LOGIN} from "../redux/actionTypes"
import{connect} from 'react-redux'

function SignOut(props){

    function handleClick(){
        firebase.auth().signOut().then(function() {
            window.localStorage.setItem('isLogged', "false");
            props.toggleLogin();
           
            var user = firebase.auth().currentUser;

            if (user) {
              console.log("zalogowany"+user.displayName)
            } else {
                console.log("niezalogowany")
            }

          }).catch(function(error) {
            // An error happened.
          }); 
    }
    
    return(
        <div>
            <button onClick={handleClick}>sign out</button>
        </div>
    )
}

const mapDispatchToProps=dispatch=>{
    return{
        toggleLogin:()=>dispatch({type: TOGGLE_LOGIN})
    }
}

export default connect(null, mapDispatchToProps)(SignOut);