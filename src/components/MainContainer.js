import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import Videobackground from './Videobackground';

const MainContainer = () => {
    const movies=useSelector((store)=>store.movie.nowplayingmovies);
    if(!movies)return;
    const {original_title,overview,id}=movies?.results[2];
  return (
    <div >
        <VideoTitle title={original_title} overview={overview}/>
        <Videobackground movieid={id}/>
    </div>
  )
}

export default MainContainer