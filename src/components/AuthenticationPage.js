import React from 'react';
import GoogleAuthentication from './GoogleAuthentication';
import TwitterAuthentication from './TwitterAuthentication';
import AuthenticationProvider from './AuthenticationProvider';
import firebase from '../firebase';

function AuthenticationPage(){

    return(
        <div>
            <AuthenticationProvider provider={new firebase.auth.GoogleAuthProvider()} providerName="google"/>
            <AuthenticationProvider provider={new firebase.auth.FacebookAuthProvider()} providerName="facebook"/>
            <AuthenticationProvider provider={new firebase.auth.TwitterAuthProvider()} providerName="twitter"/>
        </div>
    )
}

export default AuthenticationPage;