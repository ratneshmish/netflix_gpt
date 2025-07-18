import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';
const Gptmoviesystem = () => {
  const {movieNames,movieResults}=useSelector((store)=>store?.gpt);
  if(!movieNames)return null;

  return (
    <div className='p-4 m-4 bg-black text-white bg-opacity-60'>
      <div>
        {movieNames.map((moviename,index)=>(
          <MovieList key={moviename} title={moviename} movies={movieResults[index]} />
        ))}
      </div>
    </div>
  )
}

export default Gptmoviesystem;