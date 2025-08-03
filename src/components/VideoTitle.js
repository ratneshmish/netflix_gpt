import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='px-5 absolute w-screen aspect-video pt-[15%]  bg-gradient-to-b from-black text-white'>
        <div className='pt-36'>
        <h1 className='text-xl font-bold py-4  '>{title}</h1>
        <p className="hidden sm:hidden md:hidden lg:block">{overview}</p>
        </div>
        <div className='-mt-7 md:mt-1 sm:mt-1 flex justify-center md:justify-start'>
            <button className='mx-2 bg-black text-white p-4 px-10 text-center rounded-lg hover:bg-opacity-50'> ▶️Play</button>
            <button className='mx-2 bg-black text-white p-4 px-10 text-center rounded-lg bg-opacity-60 '>More info</button>
        </div>
    </div>
  )
}

export default VideoTitle