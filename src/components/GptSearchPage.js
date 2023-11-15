
import {BG} from "../utils/constants";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
const GptSearchPage=()=>{
    return(
        <div>
           <div className="absolute -z-10">
            <img src={BG}
            alt="bg-img"></img>
            </div>
            <GptSearchBar/>
            <GptMovieSuggestion/>
           
          
        </div>
    );
};
export default GptSearchPage;