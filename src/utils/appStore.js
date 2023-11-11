import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
// appStore will create a configuration and it will take reducer and reducer will have different reducer from different slices
const appStore=configureStore(
        {
            reducer:{
                user:userReducer,
            },
        },
);

export default appStore;