import React from 'react'
import Gptsearchbar from './Gptsearchbar';
import Gptmoviesystem from './Gptmoviesystem';
import { BG_LOGIN } from '../utils/Constants';
const Gptsearch = () => {
  return (
    <div>
        <div className="fixed inset-0 -z-10">
            <img src={BG_LOGIN} className='h-full object-cover w-full '></img>
        </div>
        <Gptsearchbar/>
        <Gptmoviesystem/>
    </div>
  )
}

export default Gptsearch;