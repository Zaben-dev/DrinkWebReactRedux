import React from 'react';
import firebase from 'firebase.js';
import styles from'styles/LogInPage.module.css';

function Authenticate(props){
  
  function handleClick(){
    firebase.auth().signInWithPopup(props.provider);
  }
  
  return(
    <div>
      <button className={styles.signInButton} onClick={handleClick}>{props.providerName}&nbsp;&nbsp;&nbsp;<span>{props.icon}</span></button>
    </div>
  );
}

export default Authenticate;
