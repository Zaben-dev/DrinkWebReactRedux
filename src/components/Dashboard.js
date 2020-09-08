import React, {useEffect}  from 'react';
import TopBar from './TopBar';
import {connect} from 'react-redux';
import {setUserInfo} from '../redux/actions'
import firebase from '../firebase';
import RandomDrinksBoard from './RandomDrinksBoard'

function Dashboard(props){
  
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        props.setUserInfo(user)
      }
    });
    return () => unsubscribe();
  },[])

  return(
    <>
      <TopBar/>
      <RandomDrinksBoard/>
    </>
  )
}

const mapDispatchToProps = dispatch =>{
  return{
    setUserInfo: userInfo => dispatch(setUserInfo(userInfo))
  }
}

export default connect(null, mapDispatchToProps)(Dashboard)
