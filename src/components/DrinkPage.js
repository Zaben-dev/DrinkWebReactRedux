import React, {useEffect, useCallback, useState}  from 'react';
import {useParams} from "react-router-dom";
import TopBar from './TopBar';
import DrinkIngredients from './DrinkIngredients';
import styles from '../styles/drinkPage.module.css'

function DrinkPage(){
  let {id} = useParams();
  const [drink, setDrink] = useState(null);

  const fetchDrink = useCallback( async () => {
    let data = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    let drink = await data.json();
    setDrink(drink.drinks[0]);
  },[id])

  useEffect(()=>{
    fetchDrink();
    return () => {
    }
  },[fetchDrink])
  
  return(
    <>
      <TopBar/>
      {drink === null ? (
        null
      ) : (
        <div className={styles.container}>
          <div className={styles.imageContainer}> <img className={styles.image} src={drink.strDrinkThumb}/></div>
          <div className={styles.drinkName}>{drink.strDrink}</div>
          <div className={styles.glass}>glass: {drink.strGlass}</div>
          <div><DrinkIngredients drink={drink}/></div>
          <div className={styles.description}>{drink.strInstructions}</div>
        </div>)
      }
    </>
  )
}

export default DrinkPage;
