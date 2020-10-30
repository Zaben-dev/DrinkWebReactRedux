import React from 'react'
import styles from 'styles/drinkPage.module.css'

function DrinkIngredients(props){

  function returnIngredientsAsArray(){
    let ingredients = [];
    for(let i = 1; i <= 15; i++){
      if(props.drink['strIngredient'+i]!==null && props.drink['strIngredient'+i]!==''){
        ingredients.push(props.drink['strIngredient'+i]+"  ");
      }
    }
    return ingredients;
  }

  function returnMeasuresAsArray(){
    let Measures = [];
    for(let i = 1; i <= 15; i++){
      if(props.drink['strMeasure'+i]!==null && props.drink['strMeasure'+i]!==''){
        Measures.push(props.drink['strMeasure'+i]);
      }
    }
    return Measures;
  }

  function zipIngredientsAndMeasures(ingredients, measures){
    let zipped = [];
    for(let i=0; i<ingredients.length; i++){
    if(i<measures.length){
      zipped.push([ingredients[i], measures[i]]);
    }
    else{
      zipped.push([ingredients[i]]);
    }
  }
    return zipped;
  }

  return(
    <>
      <div className={styles.ingredients}>ingredients:</div>
      <div className={styles.ingredientsContainer}>
        {Object.keys(props.drink).length !== 0 &&
        <ul>{zipIngredientsAndMeasures(returnIngredientsAsArray(), returnMeasuresAsArray()).map((x, index)=> <li className={styles.ElementOfIngredients} key={index}>{x}</li>)}</ul>}
      </div>
    </>
  )
}

export default DrinkIngredients;
