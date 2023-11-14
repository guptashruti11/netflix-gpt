import { useDispatch } from "react-redux";
import { API_OPTIONS,url } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
const useNowPlayingMovies=()=>{
    const dispatch=useDispatch();
    const getnowplayingmovies=async()=>{
        const data=await fetch(
            url,API_OPTIONS
        );
        const json=await data.json();
        dispatch(addNowPlayingMovies(json.results));
    };
    useEffect(()=>{
        getnowplayingmovies();
    },[]);

};
export default useNowPlayingMovies;