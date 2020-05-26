import React, {useState,useEffect} from 'react';
import firebase  from '../firebase'

function GoogleAuthentication(){

    function handleClick(){      
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function() {
            window.localStorage.setItem('IsUserLogged', 'true');
        }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
        });
    }

    return(
        <div>
            <button onClick={handleClick}>GOOGLE</button>
        </div>
    )
}

export default GoogleAuthentication;