import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addtrailer } from "../utils/Movieslice";

const useTrailerId = (movieid) => {
    const dispatch=useDispatch();
    const getTrailer = async () => {
       
            const data = await fetch("https://api.themoviedb.org/3/movie/"+movieid+"/videos", API_OPTIONS);
            const json = await data.json();
            const filtertrailer=json.results.filter((video)=>video.type=="Trailer");
            const trailer=filtertrailer.length?filtertrailer[0]:json.results[0];
            
            dispatch(addtrailer(trailer));
    };

    useEffect(() => {
        getTrailer();
    }, []);
};

export default useTrailerId;
