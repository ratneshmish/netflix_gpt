import React from 'react'
import { IMAGE_URL } from '../utils/Constants'

const MovieCard = ({poster_path}) => {
  if(!poster_path)return null;
  return (
    <div className='w-44' >
        <img alt='' src={IMAGE_URL+poster_path}/>
    </div>
  )
}

export default MovieCard