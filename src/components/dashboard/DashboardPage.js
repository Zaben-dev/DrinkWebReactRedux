import React from 'react';
import TopBar from '../topbar/TopBar';
import RandomDrinksBoard from './RandomDrinksBoard';
import SearchBar from '../common/SearchBar';
import ChooseCharacterToBrowseBy from '../common/ChooseCharacterToBrowseBy';

function DashboardPage(){

  return(
    <>
      <TopBar/>
      <SearchBar input=''/>
      <RandomDrinksBoard/>
      <ChooseCharacterToBrowseBy/>
    </>
  )
}

export default DashboardPage;
