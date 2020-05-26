import React from 'react';
import firebase from '../firebase';
import 'firebase/auth';

function TwitterAuthentication(){

    function handleClick(){
        var provider = new firebase.auth.TwitterAuthProvider();
            
        firebase.auth().signInWithPopup(provider).then(function() {
            const userIsLogged=true;
            window.localStorage.setItem('IsUserLogged', JSON.stringify(userIsLogged));
        }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
        });
          
    }
    
    return(
        <div>
            <button onClick={handleClick}>TWITTER</button>
        </div>
    )
}

export default TwitterAuthentication;