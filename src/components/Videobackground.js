import React from 'react'

 import useTrailerId from "../Hooks/useTrailerId";
import { useSelector } from 'react-redux';

const Videobackground = ({movieid}) => {
  const trailerkey=useSelector((store)=>store?.movie?.trailerid);
  useTrailerId(movieid);
  return (
<div className='w-screen'>
  <iframe
    className='w-screen aspect-square sm:aspect-square md:aspect-video'
    src={"https://www.youtube.com/embed/" + trailerkey?.key + "?autoplay=1&mute=1&loop=1&controls=0&playlist=" + trailerkey?.key}
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowFullScreen
  ></iframe>
</div>

  )
}

export default Videobackground;