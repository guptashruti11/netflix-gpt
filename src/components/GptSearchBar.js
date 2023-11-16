import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openai";
import { addGptMovieResult } from "../utils/gptSlice";
import { API_OPTIONS } from "../utils/constants";

const GptSearchBar=()=>{
    const langKey=useSelector(store=>store.config.lang);
    const dispatch=useDispatch();
    const searchText=useRef(null);
    const searchMovieTMDB=async(movie)=>{
        //search movie in TMDB Api
        const data=await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",
        API_OPTIONS
        );
        const json=await data.json();
        return json.results;
    };

    const handleGptSearchClick=async()=>{
        const searchTerm = searchText.current.value;

        // Constructing the query
        const query = "Suggest some movie for the query act like movie recommendation system: based on existing database" + searchTerm + "and only only give me names of 5 movies, comma separated and in the form of list like the example result giving ahead. Example Result: Gadar,Sholay,Don,Koi Mil Gaya,Golmaal";
    
        // Example output of the constructed query
        const gpt_results=await openai.chat.completions.create({
            messages: [{ role: 'user', content:query }],
            model: 'gpt-3.5-turbo',
          });
          if(!gpt_results.choices){
           //to do error handle
          }
          const gptmovieArr =(gpt_results.choices?.[0]?.message?.content.split(","));
         
          
          const promiseArr=gptmovieArr.map((movie)=>searchMovieTMDB(movie));
         // this will return an array of promise
          //for each movie I will search  tmdb api

          const tmdbResults=await Promise.all(promiseArr);
         
          dispatch(addGptMovieResult({movieNames:gptmovieArr,movieResults:tmdbResults}));
    };
    return(
        <div className="pt-[35%] md:pt-[10%] flex justify-center">
           <form onSubmit={(e)=>{e.preventDefault()}} className="w-full md:w-1/2 bg-black grid grid-cols-12 rounded-lg">
            <input
            ref={searchText}
             type="text"
              className=" p-4 m-4 col-span-9"
               placeholder={lang[langKey].gptSearchPlaceHolder}>

               </input>
            <button 
            className="py-2 px-4 m-4 col-span-3 bg-red-700 text-white rounded-lg hover:cursor-pointer"
            onClick={handleGptSearchClick}>
                {lang[langKey].search}</button>
           </form>
        </div>
    );
};
export default GptSearchBar;