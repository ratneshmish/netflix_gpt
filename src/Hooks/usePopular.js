import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants"
import { useDispatch } from "react-redux";
import { addPopular } from "../utils/Movieslice";


const usePopular=()=>{
    const dispatch=useDispatch();
const getPopular= async ()=>{
    const data= await fetch("https://api.themoviedb.org/3/movie/popular",API_OPTIONS);
    const json= await data.json();
    // console.log(json);
    dispatch(addPopular(json));
}
useEffect(()=>{
    getPopular();
},[]);

};
export default usePopular;