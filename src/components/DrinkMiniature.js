import React from 'react'
import styles from '../styles/drinkMiniature.module.css';
import {Link} from 'react-router-dom'

function DrinkMiniature(props){
  return(
    <Link to={`/drink/${props.drink.idDrink}`}>
      <div className={styles.drink}>
        <img className={styles.image}  src={props.drink.strDrinkThumb}/> <br/> 
        {props.drink.strDrink}
      </div>
    </Link>
  )
}

export default DrinkMiniature;
