import { useDispatch } from "react-redux";
import { API_OPTIONS,TopRatedMovies_URL } from "../utils/constants";
import {  addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";
const useTopRatedMovies=()=>{
    const dispatch=useDispatch();
    const gettopratedmovies=async()=>{
        const data=await fetch(
           TopRatedMovies_URL,API_OPTIONS
        );
        const json=await data.json();
        dispatch(addTopRatedMovies(json.results));
    };
    useEffect(()=>{
        gettopratedmovies();
    },[]);

};
export default useTopRatedMovies;