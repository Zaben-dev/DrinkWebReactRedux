import React, {useEffect} from 'react';
import AuthenticationPage from './AuthenticationPage';
import '../styles/App.css';
import SignOut from './SignOut';
import{TOGGLE_LOGIN} from "../redux/actionTypes"
import{connect} from 'react-redux'

function App(props) {

  useEffect(()=>{
    if(window.localStorage.getItem('isLogged')==="true"){
      props.toggleLogin();
    }
  },[])


  return (
    <div className="App">
      {props.isLogged===true?
      <SignOut/>:
      <AuthenticationPage/>}
    </div>
  );
}

const mapStateToProps = state => {
  const { isLogged } = state.LogInReducer;
  return {
    isLogged
  };
}

const mapDispatchToProps = dispatch=>{
  return{
    toggleLogin: ()=>dispatch({type: TOGGLE_LOGIN})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


