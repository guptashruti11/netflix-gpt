
import {BG} from "../utils/constants";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
const GptSearchPage=()=>{
    return(
        <>
        <div className="fixed -z-10">
        <img className="w-screen h-screen object-cover" src={BG}
        alt="bg-img"></img>
        </div>
        <div>
            <GptSearchBar/>
            <GptMovieSuggestion/>
        </div>
        </>
    );
};
export default GptSearchPage;