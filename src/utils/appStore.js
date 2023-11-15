import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import gptReducer from "../utils/gptSlice";
import configReducer from "../utils/configSlice"
// appStore will create a configuration and it will take reducer and reducer will have different reducer from different slices
const appStore=configureStore(
        {
            reducer:{
                user:userReducer,
                movies:moviesReducer,
                gpt:gptReducer,
                config:configReducer,
            },
        },
);

export default appStore;