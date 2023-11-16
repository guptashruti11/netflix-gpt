import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer=()=>{
    const movies=useSelector((store)=>store.movies);
  
    return(
     <div className="bg-black">
           {/*
            MovieCard*n
            MovieList-Now Playing
            MovieList-Popular
            movieList-Top Rated
            movieList-Upcoming 
           */}
           <div className="mt-0 md:-mt-40 pl-4 md:pl-10 relative z-20">
           {movies.nowPlayingMovies && (<MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />)}
          {movies.PopularMovies && (<MovieList title={"Popular"} movies={movies.PopularMovies} />)}
         { movies.TopRatedMovies && ( <MovieList title={"Top Rated"} movies={movies.TopRatedMovies} />)}
          { movies.UpComingMovies && (<MovieList title={"Upcoming"} movies={movies.UpComingMovies} />)}
           
           </div>
          
        </div>
    );
};
export default SecondaryContainer;