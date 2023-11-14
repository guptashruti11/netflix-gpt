import { useDispatch } from "react-redux";
import { API_OPTIONS,UpcomingMovies_URL } from "../utils/constants";
import {  addUpComingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
const useUpComimgMovies=()=>{
    const dispatch=useDispatch();
    const getupcomingmovies=async()=>{
        const data=await fetch(
           UpcomingMovies_URL,API_OPTIONS
        );
        const json=await data.json();
        dispatch(addUpComingMovies(json.results));
    };
    useEffect(()=>{
        getupcomingmovies();
    },[]);

};
export default useUpComimgMovies;