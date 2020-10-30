import React from 'react';
import { FaGlassMartiniAlt } from 'react-icons/fa';
import {useHistory} from 'react-router-dom';
import styles from 'styles/topBar.module.css';

function HomePageIcon(){
  let history = useHistory();

  function handleClick(){
    history.push('/dashboard');
  }
  
  return(
    <button className={styles.homePageIcon} onClick={handleClick}><FaGlassMartiniAlt/></button>
    )
}

export default HomePageIcon;
