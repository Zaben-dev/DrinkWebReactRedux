import React from 'react';
import TopBar from './TopBar';
import RandomDrinksBoard from './RandomDrinksBoard';
import SearchBar from './SearchBar';
import ChooseCharacterToBrowseBy from './ChooseCharacterToBrowseBy';

function Dashboard(){

  return(
    <>
      <TopBar/>
      <SearchBar input=''/>
      <RandomDrinksBoard/>
      <ChooseCharacterToBrowseBy/>
    </>
  )
}

export default Dashboard;
