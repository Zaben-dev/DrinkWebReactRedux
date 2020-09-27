import React, {useEffect}  from 'react';
import AuthenticationPage from './AuthenticationPage';
import Dashboard from './Dashboard';
import DrinkPage from './DrinkPage';
import SearchPage from './SearchPage';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import {setUserInfo} from '../redux/actions'
import firebase from '../firebase';
import {useDispatch} from 'react-redux';

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
         <Route path = "/drink/:id">
           <DrinkPage/>
         </Route>
         <Route path = "/search/:string">
           <SearchPage/>
         </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;


