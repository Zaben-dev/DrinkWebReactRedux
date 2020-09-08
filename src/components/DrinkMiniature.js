import React from 'react'
import styles from '../styles/randomDrinksBoard.module.css';

function DrinkMiniature(props){
  return(
    <div className={styles.drink}>
      <img className={styles.image}  src={props.drink.strDrinkThumb}/> <br/> 
      {props.drink.strDrink}
    </div>
  )
}

export default DrinkMiniature;
