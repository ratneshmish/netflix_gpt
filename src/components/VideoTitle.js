import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='px-5 absolute w-screen aspect-video pt-[15%]  bg-gradient-to-b from-black text-white'>
        <div className='pt-36'>
        <h1 className='text-2xl font-bold py-4 '>{title}</h1>
        <p >{overview}</p>
        </div>
        <div className='mt-2'>
            <button className='mx-2 bg-black text-white p-4 px-10 text-center rounded-lg hover:bg-opacity-80'> ▶️Play</button>
            <button className='mx-2 bg-black text-white p-4 px-10 text-center rounded-lg bg-opacity-60 '>More info</button>
        </div>
    </div>
  )
}

export default VideoTitle