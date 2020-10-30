import React from 'react';
import TopBar from 'components/topbar/TopBar';
import RandomDrinksBoard from 'components/dashboard/RandomDrinksBoard';
import SearchBar from 'components/common/SearchBar';
import ChooseCharacterToBrowseBy from 'components/common/ChooseCharacterToBrowseBy';

function DashboardPage(){

  return(
    <>
      <TopBar/>
      <SearchBar input=''/>
      <RandomDrinksBoard/>
      <ChooseCharacterToBrowseBy/>
    </>
  );
}

export default DashboardPage;
