import React from 'react';
import {useHistory} from 'react-router-dom';
import styles from 'styles/errorPage.module.css'
import { BiErrorCircle } from 'react-icons/bi';

function ErrorPage(){
  let history = useHistory();

  function handleClick(){
    history.push('/dashboard');
  }

  return(
    <>
      <div className={styles.errorIcon}><BiErrorCircle/></div>
      <div className={styles.errorMessage}>Sorry, something went Wrong.</div>
      <button onClick={handleClick} className={styles.homePageButton}>home page</button>
    </>
  )
}

export default ErrorPage;
