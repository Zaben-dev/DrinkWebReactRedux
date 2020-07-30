import React from 'react';
import firebase from '../firebase';
import {useHistory} from 'react-router-dom';

function Authenticate(props){
  let history = useHistory();
  
  function handleClick(){
    firebase.auth().signInWithPopup(props.provider).then(function(result) {
      
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

export default Authenticate;
