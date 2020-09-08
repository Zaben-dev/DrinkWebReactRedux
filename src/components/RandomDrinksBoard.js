import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {addDrinkToBoard} from '../redux/actions'
import DrinkMiniature from './DrinkMiniature'
import styles from '../styles/randomDrinksBoard.module.css';

function RandomDrinksBoard(props){
  async function fetchDrink(){
    if(props.drinksInBoard.length<4){
      let data = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
      let drink = await data.json();
      props.addDrinkToBoard(drink.drinks[0]);
    }
  }
  
  useEffect(()=>{
    fetchDrink();
  },[props.drinksInBoard.length])

  return (
    <>
      {props.drinksInBoard.length===4 && <div className={styles.board}>
        <DrinkMiniature drink={props.drinksInBoard[0]}/>
        <DrinkMiniature drink={props.drinksInBoard[1]}/>
        <DrinkMiniature drink={props.drinksInBoard[2]}/>
        <DrinkMiniature drink={props.drinksInBoard[3]}/>
      </div>}
    </>);
}

const mapStateToProps = state=> {
  return{
    drinksInBoard: state.randomDrinksInBoard
  };
}

const mapDispatchToProps = dispatch =>{
  return{
    addDrinkToBoard: drink => dispatch(addDrinkToBoard(drink))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomDrinksBoard)
