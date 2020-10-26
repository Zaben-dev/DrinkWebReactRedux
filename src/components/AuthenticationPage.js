import React, {useEffect} from 'react';
import Authenticate from './Authenticate';
import firebase from '../firebase';
import {useHistory, Link} from 'react-router-dom';
import styles from '../styles/signInPage.module.css';
import { FaGoogle, FaFacebook, FaTwitter } from 'react-icons/fa';

function AuthenticationPage(){
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
      Sign In with:
      <Authenticate provider={new firebase.auth.GoogleAuthProvider()} providerName="Google" icon={<FaGoogle/>}/>
      <Authenticate provider={new firebase.auth.FacebookAuthProvider()} providerName="Facebook" icon={<FaFacebook/>}/>
      <Authenticate provider={new firebase.auth.TwitterAuthProvider()} providerName="Twitter"  icon={<FaTwitter />}/>
      <br/> 
      <div className={styles.or}>
         or
      </div>
      <br/>
      <Link className={styles.link} to="/dashboard">enter without signing in</Link>
    </div>
  )
}

export default AuthenticationPage;
