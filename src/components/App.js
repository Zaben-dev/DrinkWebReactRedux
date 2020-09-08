import React from 'react';
import AuthenticationPage from './AuthenticationPage';
import Dashboard from './Dashboard';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

function App(props) {
  
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
        </Switch>
      </Router>
    </>
  );
}

export default App;


