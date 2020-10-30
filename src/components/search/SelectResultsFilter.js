import React from 'react';
import { VisibilityFilters, setVisibilityFilter } from 'redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import styles from 'styles/searchPage.module.css';

function SelectResultsFilter(){
  const dispatch = useDispatch();
  const filter = useSelector(state => state.visibilityFilter);

  function handleChange(event) {
    dispatch(setVisibilityFilter(event.target.value)); 
  }

  return (
    <div className={styles.selectFilter}>
      <select value={filter} onChange={handleChange}>      
        <option value={VisibilityFilters.SHOW_ALL}>&nbsp;&nbsp;show all</option>
        <option value={VisibilityFilters.SHOW_NON_ALCOHOLIC}>&nbsp;&nbsp;non alcoholic</option>
        <option value={VisibilityFilters.SHOW_ALCOHOLIC}>&nbsp;&nbsp;alcoholic</option>
      </select>
    </div>
  );
}

export default SelectResultsFilter;
