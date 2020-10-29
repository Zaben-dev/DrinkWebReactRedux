import React, {useEffect}  from 'react';
import LoginPage from './logIn/LogInPage';
import DashboardPage from './dashboard/DashboardPage';
import DrinkPage from './drink/DrinkPage';
import SearchPage from './search/SearchPage';
import UserProfilePage from './profile/UserProfilePage';
import ErrorPage from './common/ErrorPage';
import BrowseByFirstCharacterPage from './browseByFirstCharacter/BrowseByFirstCharacterPage';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import {setUserInfo} from '../redux/actions'
import firebase from '../firebase';
import {useDispatch} from 'react-redux';
import Footer from './footer/Footer';
import '../styles/index.css'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        dispatch(setUserInfo(user));
      }
    });
    return () => unsubscribe();
  },[dispatch])
  
  return (
    <>
      <Router>
         <Switch>
          <Route exact path = "/">
           <Redirect to='/login'/>
          </Route>
         <Route path = "/dashboard">
           <DashboardPage/>
         </Route>
         <Route path = "/login">
            <LoginPage/>
         </Route>
         <Route path = "/drink/:drinkId">
           <DrinkPage/>
         </Route>
         <Route path = "/search/:string">
           <SearchPage/>
         </Route>
         <Route path = "/browse/:character">
           <BrowseByFirstCharacterPage/>
         </Route>
         <Route path = "/userProfile">
           <UserProfilePage/>
         </Route>
         <Route path = "*">
           <ErrorPage/>
         </Route>
        </Switch>
      </Router>
      <br/><br/><br/>
      <Footer/>
    </>
  );
}

export default App;


