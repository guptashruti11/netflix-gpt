const { createSlice } = require("@reduxjs/toolkit");

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        showgptSearch:false,
        gptMovies:null,
        movieNames:null,
        movieResults:null,
    },
    reducers:{
        togglegptSearchView:(state,action)=>{
            state.showgptSearch=!state.showgptSearch;
        },
        addGptMovieResult:(state,action)=>{
            const {movieNames,movieResults}=action.payload;
           state.movieNames=movieNames;
           state.movieResults=movieResults;
        },
    }
});
export const {togglegptSearchView,addGptMovieResult}=gptSlice.actions;
export default gptSlice.reducer;