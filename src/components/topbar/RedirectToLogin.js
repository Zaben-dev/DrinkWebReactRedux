import React from 'react';
import {useHistory} from 'react-router-dom';
import styles from '../../styles/topBar.module.css';

function RedirectToLogin(){
  let history = useHistory();
  
  function handleClick(){
      history.push('/login');
  }
    
  return(
    <div>
      <button className={styles.signInOutButton} onClick={handleClick}>Log in</button>
    </div>
    )
}

export default RedirectToLogin;
