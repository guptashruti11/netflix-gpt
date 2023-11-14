import MovieCard from "./MovieCard";

const MovieList=({title,movies})=>{
    console.log(movies);
    return(
        <div className="px-3 text-white">
            <h1 className="text-2xl py-2">{title}</h1>
        <div className="flex overflow-x-scroll">
            
        <div className="flex">
        {movies && movies.map((movie)=>(
        <MovieCard key={movie.id} posterPath={movie.poster_path}/>
        ))}    
        </div>
        </div>
        </div>
    );
};
export default MovieList;