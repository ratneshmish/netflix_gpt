import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userslice"; 
import moviereducer from "./Movieslice";
import gptreducer from "./Gptslice";
import langreducer from "./configslice"
const appstore=configureStore({
     reducer:{
          user:userReducer,
          movie:moviereducer,
          gpt:gptreducer,
          lan:langreducer,
     },
});
export default appstore;