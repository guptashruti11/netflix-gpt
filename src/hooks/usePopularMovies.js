import { useDispatch } from "react-redux";
import { API_OPTIONS,PopularMovies_URL } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";
const usePopularMovies=()=>{
    const dispatch=useDispatch();
    const getpopularmovies=async()=>{
        const data=await fetch(
            PopularMovies_URL,API_OPTIONS
        );
        const json=await data.json();
        dispatch(addPopularMovies(json.results));
    };
    useEffect(()=>{
        getpopularmovies();
    },[]);

};
export default usePopularMovies;