import React, {useEffect} from 'react';
import Authenticate from './Authenticate';
import firebase from '../firebase';
import {useHistory} from 'react-router-dom';

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
    <div>
      <Authenticate provider={new firebase.auth.GoogleAuthProvider()} providerName="google"/>
      <Authenticate provider={new firebase.auth.FacebookAuthProvider()} providerName="facebook"/>
      <Authenticate provider={new firebase.auth.TwitterAuthProvider()} providerName="twitter"/>
    </div>
  )
}

export default AuthenticationPage;
