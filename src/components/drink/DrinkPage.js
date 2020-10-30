import React, {useEffect, useCallback, useState}  from 'react';
import {useParams} from "react-router-dom";
import TopBar from 'components/topbar/TopBar';
import AddComment from 'components/drink/AddComment';
import Comments from 'components/drink/Comments';
import DrinkIngredients from 'components/drink/DrinkIngredients';
import AddToFavorites from 'components/drink/AddToFavorites';
import {useSelector} from 'react-redux';
import styles from 'styles/drinkPage.module.css'

function DrinkPage(){
  let {drinkId} = useParams();
  const [drink, setDrink] = useState(null);
  const userInfo = useSelector(state => state.userInfo.userInfo);

  const fetchDrink = useCallback( async () => {
    let data = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`);
    let drink = await data.json();
    setDrink(drink.drinks[0]);
  },[drinkId])

  useEffect(()=>{
    fetchDrink();
  },[fetchDrink])
  
  return(
    <>
      <TopBar/>
      {drink === null ? (
        null
      ) : (
        <>
          <div className={styles.container}>
            <div className={styles.imageContainer}> <img className={styles.image} src={drink.strDrinkThumb} alt="drink"/></div>
            <div className={styles.name}>{drink.strDrink} &nbsp; {Object.keys(userInfo).length !== 0 && <AddToFavorites/>}</div>
            <div className={styles.glass}>glass: {drink.strGlass}</div>
            <div><DrinkIngredients drink={drink}/></div>
            <div className={styles.instructions}>{drink.strInstructions}</div>
            {Object.keys(userInfo).length !== 0 ? <AddComment/> : <div className={styles.signInInfo}>Sign in to add comments</div>}
          </div>
          <Comments/>
        </>
        )
      }
    </>
  )
}

export default DrinkPage;
