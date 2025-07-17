import React from 'react'
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
 import useNowplaying from "../Hooks/useNowplaying";
import usePopular from '../Hooks/usePopular';
import useUpcoming from '../Hooks/useUpcoming';
import useToprated from '../Hooks/useToprated';
import Gptsearch from './Gptsearch';
import { useSelector } from 'react-redux';

const Browse = () => {
 useNowplaying();
 usePopular();
 useUpcoming();
 useToprated();
 const gptsearch=useSelector((store)=>store?.gpt?.togglefeature);
  return (
    <div>
      <Header/>
      {gptsearch?<Gptsearch/>:<>
       <MainContainer/>
    <SecondaryContainer/></>}
      
    </div>
  )
}

export default Browse;
