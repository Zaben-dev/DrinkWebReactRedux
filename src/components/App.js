import React, {useEffect}  from 'react';
import AuthenticationPage from './AuthenticationPage';
import Dashboard from './Dashboard';
import DrinkPage from './DrinkPage';
import SearchPage from './SearchPage';
import UserProfilePage from './UserProfilePage';
import ErrorPage from './ErrorPage';
import BrowseByFirstCharacterPage from './BrowseByFirstCharacterPage';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import {setUserInfo} from '../redux/actions'
import firebase from '../firebase';
import {useDispatch} from 'react-redux';
import Footer from './Footer';
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
           <Dashboard/>
         </Route>
         <Route path = "/login">
            <AuthenticationPage/>
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


