import React from 'react';
import SignOut from './SignOut';
import styles from '../styles/topBar.module.css';
import {connect} from 'react-redux';

function TopBar(props){

  return(
    <div className={styles.topBar}>
      <SignOut/>
      {props.userInfo ? props.userInfo.displayName : null}
      <img className={styles.profileImage} src={props.userInfo.photoURL}/>
    </div>
  )
}

const mapStateToProps = state => {
  return{
    userInfo: state.userInfoReducer.userInfo
  };
}

export default connect(mapStateToProps, null)(TopBar)
