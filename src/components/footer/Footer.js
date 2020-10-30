import React from 'react';
import styles from 'styles/footer.module.css'
import { FaGithub } from 'react-icons/fa';

function Footer(){
  return(
    <footer>
      <a href="https://github.com/Zaben-dev">
        <div className={styles.footer}>
          <div className={styles.text}>
            my github &nbsp;
          </div> 
          <FaGithub/>
        </div>
      </a>
    </footer>
  )
}

export default Footer;
