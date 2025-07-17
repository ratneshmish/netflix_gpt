import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
  return (
    <div>
        <div >
            <h1 className='text-2xl font-bold p-2 text-white'>{title}</h1>
            <div className=' flex overflow-x-scroll scrollbar-hide'>
                <div className='flex gap-4'>
                { movies && movies.map((cm)=>(
                    <MovieCard key={cm.id} poster_path={cm.poster_path}/>
                ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default MovieList