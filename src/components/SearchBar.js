import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import styles from '../styles/searchBar.module.css';
import { FaSearch } from 'react-icons/fa';

function SearchBar(props){
  const [input, setInput] = useState(props.input);
  let history = useHistory();

  function handleChange(event) { 
    setInput(event.target.value); 
  }

  function handleSubmit() {
    history.push(`/search/${input}`);
  }

  function handleKeypress(event){ 
    if (event.which === 13) {  
      handleSubmit();    
    }  
  }

  return (
    <div className={styles.container}>
      <input className={styles.searchInput} type="text" onKeyPress={handleKeypress} value={input} onChange={handleChange} placeholder="Search for drink..." />  
      <button className={styles.submitButton} onClick={handleSubmit}><FaSearch/></button>
    </div>
  );
}

export default SearchBar;
