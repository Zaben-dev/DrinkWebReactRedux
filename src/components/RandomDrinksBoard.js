import React, {useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addDrinkToBoard} from '../redux/actions'
import DrinkMiniature from './DrinkMiniature'
import styles from '../styles/randomDrinksBoard.module.css';


function RandomDrinksBoard(){
  const dispatch = useDispatch();
  const drinksInBoard = useSelector(state => state.randomDrinksInBoard);

  const fetchDrink = useCallback( async () => {
    if(drinksInBoard.length<4){
      let data = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
      let drink = await data.json();
      dispatch(addDrinkToBoard(drink.drinks[0]));
    }
  },[drinksInBoard, dispatch])
  
  useEffect(()=>{
    fetchDrink();
  },[drinksInBoard, fetchDrink])

  return (
    <>
      {drinksInBoard.length===4 && <div className={styles.board}>
        <DrinkMiniature drink={drinksInBoard[0]}/>
        <DrinkMiniature drink={drinksInBoard[1]}/>
        <DrinkMiniature drink={drinksInBoard[2]}/>
        <DrinkMiniature drink={drinksInBoard[3]}/>
      </div>}
    </>);
}

export default RandomDrinksBoard;
