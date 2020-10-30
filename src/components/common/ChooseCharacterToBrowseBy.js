import React from 'react';
import {Link} from "react-router-dom";
import styles from 'styles/chooseCharacterToBrowseBy.module.css';

function ChooseCharacterToBrowseBy(){
  return(
    <div className={styles.container}>
      browse A-Z (0-9)<br/>
      <Link className={styles.link} to="/browse/0">0</Link>
      <Link className={styles.link} to="/browse/1">1</Link>
      <Link className={styles.link} to="/browse/2">2</Link>
      <Link className={styles.link} to="/browse/3">3</Link>
      <Link className={styles.link} to="/browse/4">4</Link>
      <Link className={styles.link} to="/browse/5">5</Link>
      <Link className={styles.link} to="/browse/6">6</Link>
      <Link className={styles.link} to="/browse/7">7</Link>
      <Link className={styles.link} to="/browse/8">8</Link>
      <Link className={styles.link} to="/browse/9">9</Link>
      <Link className={styles.link} to="/browse/A">A</Link>
      <Link className={styles.link} to="/browse/B">B</Link>
      <Link className={styles.link} to="/browse/C">C</Link>
      <Link className={styles.link} to="/browse/D">D</Link>
      <Link className={styles.link} to="/browse/E">E</Link>
      <Link className={styles.link} to="/browse/F">F</Link>
      <Link className={styles.link} to="/browse/G">G</Link>
      <Link className={styles.link} to="/browse/H">H</Link>
      <Link className={styles.link} to="/browse/I">I</Link>
      <Link className={styles.link} to="/browse/J">J</Link>
      <Link className={styles.link} to="/browse/K">K</Link>
      <Link className={styles.link} to="/browse/L">L</Link>
      <Link className={styles.link} to="/browse/M">M</Link>
      <Link className={styles.link} to="/browse/N">N</Link>
      <Link className={styles.link} to="/browse/O">O</Link>
      <Link className={styles.link} to="/browse/P">P</Link>
      <Link className={styles.link} to="/browse/Q">Q</Link>
      <Link className={styles.link} to="/browse/R">R</Link>
      <Link className={styles.link} to="/browse/S">S</Link>
      <Link className={styles.link} to="/browse/T">T</Link>
      <Link className={styles.link} to="/browse/U">U</Link>
      <Link className={styles.link} to="/browse/V">V</Link>
      <Link className={styles.link} to="/browse/W">W</Link>
      <Link className={styles.link} to="/browse/X">X</Link>
      <Link className={styles.link} to="/browse/Y">Y</Link>
      <Link className={styles.link} to="/browse/Z">Z</Link>
    </div>
  );
}

export default ChooseCharacterToBrowseBy;
