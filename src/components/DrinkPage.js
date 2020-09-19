import React, {useEffect, useCallback}  from 'react';
import {useParams} from "react-router-dom";
import TopBar from './TopBar';
import DrinkIngredients from './DrinkIngredients';
import {useDispatch, useSelector} from 'react-redux';
import {addDrinkToDisplay, clearActuallyDisplayingDrink} from '../redux/actions';
import styles from '../styles/drinkPage.module.css'

function DrinkPage(){
  let {id} = useParams();
  const dispatch = useDispatch();
  const drinkToDisplay = useSelector(state => state.drinkToDisplay.drink);

  const fetchDrink = useCallback( async () => {
    let data = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    let drink = await data.json();
    dispatch(addDrinkToDisplay(drink.drinks[0]));
  },[dispatch, id])

  useEffect(()=>{
    fetchDrink();
    return () => {
      dispatch(clearActuallyDisplayingDrink());
    }
  },[dispatch, fetchDrink])
  
  return(
    <>
      <TopBar/>
      <div className={styles.container}>
        <div className={styles.imageContainer}> <img className={styles.image} src={drinkToDisplay.strDrinkThumb}/></div>
        <div className={styles.drinkName}>{drinkToDisplay.strDrink}</div>
        <div className={styles.glass}>glass: {drinkToDisplay.strGlass}</div>
        <div><DrinkIngredients drink={drinkToDisplay}/></div>
        <div className={styles.description}>{drinkToDisplay.strInstructions}</div>
      </div>
    </>
  )
}


export default DrinkPage;
