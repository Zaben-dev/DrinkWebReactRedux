import React, {useState, useEffect} from 'react';
import {AiOutlineStar, AiFillStar} from 'react-icons/ai';
import styles from '../styles/drinkPage.module.css';
import {useParams} from "react-router-dom";
import {useSelector} from 'react-redux';
import firebase from '../firebase';
import 'firebase/firestore';

function AddToFavorites(){
  const [isFavorite, setIsFavorite] = useState(false);
  const userInfo = useSelector(state => state.userInfo.userInfo);
  let {drinkId} = useParams();
  let db = firebase.firestore();

  useEffect(() => {
    if(Object.keys(userInfo).length !== 0){
      db.collection("users").doc(userInfo.uid).collection("favorites").doc(drinkId).get()
      .then((docSnapshot) => {
        if (docSnapshot.exists) {
          setIsFavorite(true);
        }
      });
    }
  },[userInfo, db, drinkId])

  function handleClick(){
    if(isFavorite === false){
      db.collection("users").doc(userInfo.uid).collection("favorites").doc(drinkId).set({
        drinkId: drinkId
      })
      .then(
        setIsFavorite(true)
      )
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
    }

    if(isFavorite === true){
        db.collection("users").doc(userInfo.uid).collection("favorites").doc(drinkId).delete()
        .then(
          setIsFavorite(false)
        )
        .catch(function(error) {
          console.error("Error removing document: ", error);
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
  )
}

export default AddToFavorites;
