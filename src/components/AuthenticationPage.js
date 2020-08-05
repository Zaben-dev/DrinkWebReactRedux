import React, {useEffect} from 'react';
import Authenticate from './Authenticate';
import firebase from '../firebase';
import {useHistory} from 'react-router-dom';
import '../styles/loginPage.css';
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
  },[])

  return(
    <div className="container">
      Sign In with:
      <Authenticate provider={new firebase.auth.GoogleAuthProvider()} providerName="Google" icon={<FaGoogle/>}/>
      <Authenticate provider={new firebase.auth.FacebookAuthProvider()} providerName="Facebook" icon={<FaFacebook/>}/>
      <Authenticate provider={new firebase.auth.TwitterAuthProvider()} providerName="Twitter"  icon={<FaTwitter />}/>
    </div>
  )
}

export default AuthenticationPage;
