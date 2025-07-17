import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import languageconstant from '../utils/languageconstant';
import { useRef } from 'react';
import {callCohere} from "../utils/cohere";
import { API_OPTIONS } from '../utils/Constants';
import { addgptmovies } from '../utils/Gptslice';
const Gptsearchbar = () => {
    const dispatch=useDispatch();
    const languageselectorkey=useSelector((store)=>store?.lan?.language);
    const searchtext=useRef(null);
    const searchmovietmdb=async(movie)=>{
      const data=await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie +"&include_adult=false&language=en-US&page=1", API_OPTIONS)
      const json= await data.json();
      return json.results;
    }
   const handlegptclick = async () => {
  const query = searchtext.current.value;
  if (!query) return;

  const prompt = `
You are a movie recommendation system. Respond ONLY with 5 movie names based on the query: "${query}".
Return them comma-separated on a single line. No bullet points, no extra words.
Example: Inception, Titanic, The Matrix, Gladiator, Avatar
`;

  try {
    const data = await callCohere({ prompt });

    if (!data?.generations || data.generations.length === 0) {
      // console.error("No generations returned:", data);
      return;
    }

    let result = data.generations[0].text.trim();
    // console.log("Cohere Result:", result);
      result = result
      .replace(/^.*?(?=[a-zA-Z0-9"])/, "")     // remove intro like "Here are some..."
      .replace(/"\s*"/g, '", "')              // fix double quotes stuck together
      .replace(/([a-z])"(?=[A-Z])/g, '$1",'); // fix missing commas between movies

    const movies = result
      .split(/,\s*|\d+\.\s*/)                // split by commas or numbered list
      .map((movie) => movie.replace(/^"|"$/g, "").trim())
      .filter((movie) => movie.length > 0);

console.log(movies);
    const promisearray = movies.map((movie) => searchmovietmdb(movie));
    const tmdbresults=await Promise.all(promisearray);
    // console.log(tmdbresults);
    dispatch(addgptmovies({movieNames:movies,movieResults:tmdbresults}));

  } catch (error) {
    console.error("Error calling Cohere:", error.message);
  }
};

  return (
    <div className='pt-[40%] md:pt-[15%] flex justify-center'>
        <form className=' w-full md:w-1/2 bg-black grid grid-cols-12 ' onSubmit={(e)=>e.preventDefault()}>
            <input type='text' placeholder={languageconstant[languageselectorkey].gptsearchfolder} className='col-span-9 m-2 p-2 outline-gray-950 outline' ref={searchtext}></input>
            <button className='bg-red-500 col-span-3 py-2 m-2 rounded-lg text-white' onClick={handlegptclick}>{languageconstant[languageselectorkey].search}</button>
        </form>
    </div>
  )
}

export default Gptsearchbar;