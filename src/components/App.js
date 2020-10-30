import React, { useEffect }  from 'react';
import LoginPage from 'components/logIn/LogInPage';
import DashboardPage from 'components/dashboard/DashboardPage';
import DrinkPage from 'components/drink/DrinkPage';
import SearchPage from 'components/search/SearchPage';
import UserProfilePage from 'components/profile/UserProfilePage';
import ErrorPage from 'components/common/ErrorPage';
import BrowseByFirstCharacterPage from 'components/browseByFirstCharacter/BrowseByFirstCharacterPage';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { setUser } from 'redux/actions'
import firebase from 'firebase.js';
import { useDispatch } from 'react-redux';
import Footer from 'components/footer/Footer';
import 'styles/index.css'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        dispatch(setUser(user));
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


