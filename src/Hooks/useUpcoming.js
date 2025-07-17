
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants"
import { useDispatch } from "react-redux";
import { addUpcoming } from "../utils/Movieslice";


const useUpcoming=()=>{
    const dispatch=useDispatch();
const getUpcoming= async ()=>{
    const data= await fetch("https://api.themoviedb.org/3/movie/upcoming",API_OPTIONS);
    const json= await data.json();
    // console.log(json);
    dispatch(addUpcoming(json));
}
useEffect(()=>{
    getUpcoming();
},[]);

};
export default useUpcoming;

