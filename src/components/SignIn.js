import React from 'react';
import {useHistory} from 'react-router-dom';
import styles from '../styles/topBar.module.css';

function SignIn(){
  let history = useHistory();
  
  function handleClick(){
      history.push('/login');
  }
    
  return(
    <div>
      <button className={styles.signInOutButton} onClick={handleClick}>sign in</button>
    </div>
    )
}

export default SignIn;
