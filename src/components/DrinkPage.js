import React, {useEffect}  from 'react';
import {useParams} from "react-router-dom";
import TopBar from './TopBar';
import DrinkIngredients from './DrinkIngredients';
import {connect} from 'react-redux';
import {addDrinkToDisplay, clearActuallyDisplayingDrink} from '../redux/actions';
import styles from '../styles/drinkPage.module.css'

function DrinkPage(props){
  let {id} = useParams();

  async function fetchDrink(){
    let data = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    let drink = await data.json();
    props.addDrinkToDisplay(drink.drinks[0]);
  }

  useEffect(()=>{
    fetchDrink();
    return () => {
      props.clearActuallyDisplayingDrink();
    }
  },[])
  
  return(
    <>
      <TopBar/>
      <div className={styles.container}>
        <div className={styles.imageContainer}> <img className={styles.image} src={props.drinkToDisplay.strDrinkThumb}/></div>
        <div className={styles.drinkName}>{props.drinkToDisplay.strDrink}</div>
        <div className={styles.glass}>glass: {props.drinkToDisplay.strGlass}</div>
        <div ><DrinkIngredients drink={props.drinkToDisplay}/></div>
        <div className={styles.description}>{props.drinkToDisplay.strInstructions}</div>
      </div>
    </>
  )
}

const mapStateToProps = state=> {
  return{
    drinkToDisplay: state.drinkToDisplay.drink
  };
}

const mapDispatchToProps = dispatch =>{
  return{
    addDrinkToDisplay: drink => dispatch(addDrinkToDisplay(drink)),
    clearActuallyDisplayingDrink: () => dispatch(clearActuallyDisplayingDrink())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrinkPage);
