import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
const Browse=()=>{
    // fetching the data and putting that into the store
    // to get the data from the store we use use-selector
    useNowPlayingMovies();
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