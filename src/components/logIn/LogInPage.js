import React, { useEffect } from 'react';
import Authenticate from 'components/logIn/Authenticate';
import firebase from 'firebase.js';
import { useHistory, Link } from 'react-router-dom';
import styles from 'styles/LogInPage.module.css';
import { FaGoogle, FaFacebook, FaTwitter } from 'react-icons/fa';

function LogInPage(){
  let history = useHistory();
  
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        history.push('/dashboard');
      }
    });
    return () => unsubscribe();
  },[history])

  return(
    <div className={styles.container}>
      Log in with:
      <Authenticate provider={new firebase.auth.GoogleAuthProvider()} providerName="Google" icon={<FaGoogle/>}/>
      <Authenticate provider={new firebase.auth.FacebookAuthProvider()} providerName="Facebook" icon={<FaFacebook/>}/>
      <Authenticate provider={new firebase.auth.TwitterAuthProvider()} providerName="Twitter"  icon={<FaTwitter />}/>
      <br/> 
      <div className={styles.or}>
         or
      </div>
      <br/>
      <Link className={styles.link} to="/dashboard">enter without account</Link>
    </div>
  );
}

export default LogInPage;
