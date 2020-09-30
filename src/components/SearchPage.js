import React , {useEffect, useCallback}  from 'react';
import SelectFilter from './SelectFilter';
import TopBar from './TopBar';
import DrinkMiniature from './DrinkMiniature';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {addSearchResults, VisibilityFilters} from '../redux/actions';
import styles from '../styles/searchPage.module.css';
import { FaSearch } from 'react-icons/fa';

function SearchPage(){
  let {string} = useParams();
  const dispatch = useDispatch();
  const results = useSelector(state => state.searchResults.results);
  const filter = useSelector(state => state.visibilityFilter);

  const fetchResults = useCallback( async () => {
    let data = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${string}`);
    let results = await data.json();
    dispatch(addSearchResults(results.drinks));
  },[string, dispatch])

  useEffect(()=>{
    fetchResults();
  },[fetchResults])


  if (results === null){
    return(
      <>
        <TopBar/>
        <div className={styles.noResults}> 
          <FaSearch/> Sorry, no results were found...
        </div>
      </>
    )
  }
  else if (Object.keys(results).length === 0){
    return null;
  }
  else{
    switch(filter){
      case VisibilityFilters.SHOW_ALL:{
        return (
          <>
            <TopBar/>
            <SelectFilter/>
            <div className={styles.drinksContainer}>
              {results.map((drink, index) => <DrinkMiniature drink={drink} key={index}/>)}
            </div>
          </>)  
      }
      case VisibilityFilters.SHOW_NON_ALCOHOLIC:{
        return (
          <>
            <TopBar/>
            <SelectFilter/>
            <div className={styles.drinksContainer}>
              {results.filter(drink => drink.strAlcoholic === 'Non alcoholic').map((drink, index) => <DrinkMiniature drink={drink} key={index}/>)}
            </div>
          </>)
      }
      case VisibilityFilters.SHOW_ALCOHOLIC:{
        return (
          <>
            <TopBar/>
            <SelectFilter/>
            <div className={styles.drinksContainer}>
              {results.filter(drink => (drink.strAlcoholic === 'Alcoholic' || drink.strAlcoholic === 'Optional alcohol')).map((drink, index) => <DrinkMiniature drink={drink} key={index}/>)}
            </div>
          </>)
      }
      default:
        throw new Error('Unknown filter: ' + filter)
    }
  }
}

export default SearchPage;
