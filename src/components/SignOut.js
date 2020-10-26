import React from 'react';
import firebase from '../firebase';
import 'firebase/auth';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {clearUserInfo} from '../redux/actions';
import styles from '../styles/topBar.module.css';

function SignOut(){
  const dispatch = useDispatch()
  let history = useHistory();

  function handleClick(){
    firebase.auth().signOut().then(function(){
      dispatch(clearUserInfo());
      history.push('/login');
    }).catch(function() {
      history.push('/error');
    }); 
  }
    
  return(
    <div>
      <button className={styles.signInOutButton} onClick={handleClick}>sign out</button>
    </div>
    )
}

export default SignOut;
