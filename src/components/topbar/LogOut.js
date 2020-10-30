import React from 'react';
import firebase from 'firebase.js';
import 'firebase/auth';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearUser } from 'redux/actions';
import styles from 'styles/topBar.module.css';

function LogOut(){
  const dispatch = useDispatch();
  let history = useHistory();

  function handleClick(){
    firebase.auth().signOut()
    .then(() => {
      dispatch(clearUser());
      history.push('/login');
    }).catch(() => {
      history.push('/error');
    }); 
  }
    
  return(
    <div>
      <button className={styles.signInOutButton} onClick={handleClick}>Log out</button>
    </div>
  );
}

export default LogOut;
