import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComimgMovies from "../hooks/useUpComingMovies";
const Browse=()=>{
    // fetching the data and putting that into the store
    // to get the data from the store we use use-selector
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpComimgMovies();
    return (
        <div>
            <Header/>
            <MainContainer/>
            <SecondaryContainer/>
            {/*
                MainContainer
                - VideoBackground
                - VideoTitle
                SecondaryContainer
                - MovieList*n(n rows)
                    - cards*n(each rows has n columns)
            */}
        </div>
    );
};
export default Browse;