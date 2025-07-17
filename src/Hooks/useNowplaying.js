import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants"
import { useDispatch } from "react-redux";
import { addNowplayingMovies } from "../utils/Movieslice";


const useNowplaying=()=>{
    const dispatch=useDispatch();
const getnowplaying= async ()=>{
    const data= await fetch("https://api.themoviedb.org/3/movie/now_playing",API_OPTIONS);
    const json= await data.json();
    // console.log(json);
    dispatch(addNowplayingMovies(json));
}
useEffect(()=>{
    getnowplaying();
},[]);

};
export default useNowplaying;