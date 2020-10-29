import React from 'react';
import styles from '../../styles/randomDrinksBoard.module.css';
import {useDispatch} from 'react-redux';
import {refreshDrinksInBoard} from '../../redux/actions'
import { HiOutlineRefresh } from 'react-icons/hi';

function RefreshDrinksInBoard(){
  const dispatch = useDispatch()

  function handleClick(){
    dispatch(refreshDrinksInBoard());
  }
    
  return(
    <div>
      <button className={styles.refreshButton} onClick={handleClick}><HiOutlineRefresh/></button>
    </div>
    )
}

export default RefreshDrinksInBoard;
