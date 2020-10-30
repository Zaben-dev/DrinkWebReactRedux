import React, { useState, useEffect } from 'react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import styles from 'styles/drinkPage.module.css';
import { useParams, useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';
import firebase from 'firebase.js';
import 'firebase/firestore';

function AddToFavorites(){
  const [isFavorite, setIsFavorite] = useState(false);
  const user = useSelector(state => state.user.user);
  let {drinkId} = useParams();
  let db = firebase.firestore();
  let history = useHistory();

  useEffect(() => {
    if(Object.keys(user).length !== 0){
      db.collection("users").doc(user.uid).collection("favorites").doc(drinkId).get()
      .then((docSnapshot) => {
        if (docSnapshot.exists) {
          setIsFavorite(true);
        }
      });
    }
  },[user, db, drinkId])

  function handleClick(){
    if(isFavorite === false){
      db.collection("users").doc(user.uid).collection("favorites").doc(drinkId).set({
        drinkId: drinkId
      })
      .then(() => {
        setIsFavorite(true);
      })
      .catch(() => {
        history.push('/error');
      });
    }

    if(isFavorite === true){
      db.collection("users").doc(user.uid).collection("favorites").doc(drinkId).delete()
      .then(() => {
        setIsFavorite(false);
      })
      .catch(() => {
        history.push('/error');
      });
    }
  }

  return(
    <>
      {isFavorite ? (       
        <button className={styles.clickedStar} onClick={handleClick}>
          <AiFillStar/>
        </button>    
      ) : (
        <button className={styles.star} onClick={handleClick}>
          <AiOutlineStar/>
        </button>
      )}
    </>
  );
}

export default AddToFavorites;
