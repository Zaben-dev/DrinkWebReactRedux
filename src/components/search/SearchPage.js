import React , {useEffect, useCallback}  from 'react';
import SelectResultsFilter from 'components/search/SelectResultsFilter';
import TopBar from 'components/topbar/TopBar';
import SearchBar from 'components/common/SearchBar';
import DrinkMiniature from 'components/common/DrinkMiniature';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {addSearchResults, VisibilityFilters} from 'redux/actions';
import styles from 'styles/searchPage.module.css';
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
        <SearchBar input={string}/>
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
    return(
      <>
        <TopBar/>
        <SearchBar input={string}/>
        <SelectResultsFilter/>
        <div className={styles.drinksContainer}>
          {filter === VisibilityFilters.SHOW_ALL && results.map((drink, index) => <DrinkMiniature drink={drink} key={index}/>)}
          {filter === VisibilityFilters.SHOW_NON_ALCOHOLIC && results.filter(drink => drink.strAlcoholic === 'Non alcoholic').map((drink, index) => <DrinkMiniature drink={drink} key={index}/>)}
          {filter === VisibilityFilters.SHOW_ALCOHOLIC && results.filter(drink => (drink.strAlcoholic === 'Alcoholic' || drink.strAlcoholic === 'Optional alcohol')).map((drink, index) => <DrinkMiniature drink={drink} key={index}/>)}
        </div>
      </>
    )  
  }
}

export default SearchPage;
