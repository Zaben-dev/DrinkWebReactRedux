import React from 'react';
import firebase from '../firebase';
import styles from'../styles/loginPage.module.css';

function Authenticate(props){
  
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
      <button className={styles.button} onClick={handleClick}>{props.providerName}&nbsp;&nbsp;&nbsp;<span>{props.icon}</span></button>
    </div>
    )
}

export default Authenticate
