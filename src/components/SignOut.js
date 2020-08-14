import React from 'react';
import firebase from '../firebase';
import 'firebase/auth';
import {useHistory} from 'react-router-dom';
import styles from '../styles/topBar.module.css';

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
      <button className={styles.button} onClick={handleClick}>sign out</button>
    </div>
    )
}

export default SignOut;
