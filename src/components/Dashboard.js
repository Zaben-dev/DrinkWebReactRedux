import React from 'react';
import TopBar from './TopBar';
import RandomDrinksBoard from './RandomDrinksBoard';
import SearchBar from './SearchBar';

function Dashboard(){

  return(
    <>
      <TopBar/>
      <SearchBar/>
      <RandomDrinksBoard/>
    </>
  )
}

export default Dashboard;
