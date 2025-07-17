
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants"
import { useDispatch } from "react-redux";
import { addTopRated } from "../utils/Movieslice";


const useToprated=()=>{
    const dispatch=useDispatch();
const getToprated= async ()=>{
    const data= await fetch("https://api.themoviedb.org/3/movie/top_rated",API_OPTIONS);
    const json= await data.json();
    // console.log(json);
    dispatch(addTopRated(json));
}
useEffect(()=>{
    getToprated();
},[]);

};
export default useToprated;