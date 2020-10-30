import React, { useEffect, useState } from 'react';
import TopBar from 'components/topbar/TopBar';
import DrinkMiniature from 'components/common/DrinkMiniature';
import { useSelector } from 'react-redux';
import styles from 'styles/userProfilePage.module.css';
import firebase from 'firebase.js';
import 'firebase/firestore';

function UserProfilePage(){
  const user = useSelector(state => state.user);
  let db = firebase.firestore();
  const [favorites, setFavorites] = useState([]);
  const [isFavoritesEmpty, setIsFavoritesEmpty] = useState(false);

  async function fetchDrink(id){
    let data = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    let drink = await data.json();
    setFavorites(oldArray => [...oldArray, drink.drinks[0]]);
  }

  useEffect(() => {
    if(Object.keys(user).length !== 0){
      db.collection("users").doc(user.uid).collection("favorites").get()
      .then(function(querySnapshot) {
        if(querySnapshot.empty){
          setIsFavoritesEmpty(true);
        }
        querySnapshot.forEach(function(doc) {
            fetchDrink(doc.data().drinkId)
        });
      })
    }
  },[user, db])

  return(
    <>
      <TopBar/>
      {Object.keys(user).length !== 0 &&
        <>
          <img className={styles.profileImage} src={user.photoURL} alt="avatar"/>
          <div className={styles.displayName}>{user.displayName}</div>
          <div className={styles.myFavoritesText}>My favorites:</div>
          <div className={styles.drinksContainer}>
            {favorites.map((drink, index) => <DrinkMiniature drink={drink} key={index}/>)}
          </div>
          {isFavoritesEmpty === true && <div className={styles.emptyFavoritesInfo}>You don't have any favorites yet.</div>}
        </>
      }
    </>
  );
}

export default UserProfilePage;
