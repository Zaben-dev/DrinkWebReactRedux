import React, {useEffect}  from 'react';
import TopBar from './TopBar';
import {useDispatch} from 'react-redux';
import {setUserInfo} from '../redux/actions'
import firebase from '../firebase';
import RandomDrinksBoard from './RandomDrinksBoard'

function Dashboard(){
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        dispatch(setUserInfo(user));
      }
    });
    return () => unsubscribe();
  },[dispatch])

  return(
    <>
      <TopBar/>
      <RandomDrinksBoard/>
    </>
  )
}

export default Dashboard;
