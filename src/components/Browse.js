import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComimgMovies from "../hooks/useUpComingMovies";
import Footer from "./Footer";
import GptSearchPage from "./GptSearchPage";
import { useSelector } from "react-redux";
const Browse=()=>{
    const showgptsearch=useSelector(store=>store.gpt.showgptSearch);
    // fetching the data and putting that into the store
    // to get the data from the store we use use-selector
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpComimgMovies();
    return (
        <div>
            <Header/>
            {
               showgptsearch ?
               (<GptSearchPage/>):(<><MainContainer/>
               <SecondaryContainer/><Footer/></>)
            }
            
            
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