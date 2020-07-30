import React from 'react';
import firebase from '../firebase';
import 'firebase/auth';
import {useHistory} from 'react-router-dom';

function SignOut(props){
  let history = useHistory();
  function handleClick(){
    firebase.auth().signOut().then(function() {
      history.push('/login');
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

export default SignOut;
