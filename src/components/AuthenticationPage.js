import React, {useEffect} from 'react';
import Authenticate from './Authenticate';
import firebase from '../firebase';
import {useHistory} from 'react-router-dom';
import '../styles/loginPage.css';


function AuthenticationPage(){
  let history = useHistory();
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        history.push('/dashboard');
      }
    });
    return () => unsubscribe();
  },[])

  return(
    <div className="container">
      Sign In with:
      <Authenticate provider={new firebase.auth.GoogleAuthProvider()} providerName="Google"/>
      <Authenticate provider={new firebase.auth.FacebookAuthProvider()} providerName="Facebook"/>
      <Authenticate provider={new firebase.auth.TwitterAuthProvider()} providerName="Twitter"/>
    </div>
  )
}

export default AuthenticationPage;
