import React , {useEffect, useCallback, useState}  from 'react';
import TopBar from './TopBar';
import ChooseCharacterToBrowseBy from './ChooseCharacterToBrowseBy';
import DrinkMiniature from './DrinkMiniature';
import {useParams} from "react-router-dom";
import styles from '../styles/BrowseByFirstCharacterPage.module.css';
import { FaSearch } from 'react-icons/fa';

function BrowseByFirstCharacterPage(){
  let {character} = useParams();
  const [drinks, setDrinks] = useState('');

  const fetchResults = useCallback( async () => {
    let data = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${character}`);
    let results = await data.json();
    setDrinks(results.drinks);
    console.log(results);
  },[character])

  useEffect(()=>{
    fetchResults();
  },[fetchResults])

  
  if(drinks === ''){
    return null
  }
  else if(drinks === null){
    return(
    <>
      <TopBar/>
      <ChooseCharacterToBrowseBy/>
      <div className={styles.noResults}> 
        <FaSearch/> Sorry, no results were found...
      </div>
    </>
    )
  }
  else{
    return(
    <>
      <TopBar/>
      <ChooseCharacterToBrowseBy/>
      <div className={styles.drinksContainer}>
        {drinks.map((drink, index) => <DrinkMiniature drink={drink} key={index}/>)}
      </div>
    </>
    )
  }   
}

export default BrowseByFirstCharacterPage;
