import React from 'react'
import MovieCard from './MovieCard';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {

  
  const cinema=useSelector((store)=>store?.movie?.nowplayingmovies);
  const Popularcinema=useSelector((store)=>store?.movie?.Popular);
  const TopRatedcinema=useSelector((store)=>store?.movie?.TopRated);
  const Upcomingcinema=useSelector((store)=>store?.movie?.Upcoming);
  return (
    <div className='bg-black'>
      <div className='-mt-40 pl-12 z-10'> 
      <MovieList title={"Now Playing"} movies={cinema?.results}/>
      <MovieList title={"Top rated"} movies={TopRatedcinema?.results}/>
      <MovieList title={"Popular movies"} movies={Popularcinema?.results}/>
      <MovieList title={"Upcoming"} movies={Upcomingcinema?.results}/>
      <MovieList title={"Comedy"} movies={cinema?.results}/>
     
      </div>
    </div>
  )
}

export default SecondaryContainer