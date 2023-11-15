const { createSlice } = require("@reduxjs/toolkit");

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        showgptSearch:false,
    },
    reducers:{
        togglegptSearchView:(state,action)=>{
            state.showgptSearch=!state.showgptSearch;
        },
    }
});
export const {togglegptSearchView}=gptSlice.actions;
export default gptSlice.reducer;