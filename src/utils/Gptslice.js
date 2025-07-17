import { createSlice } from "@reduxjs/toolkit";

const Gptslice=createSlice({
    name:"gpt",
    initialState:{
        togglefeature:false,
        movieNames:null,
        movieResults:null,
    },
    reducers:{
        addtogglefeature:(state)=>{
            state.togglefeature=!state.togglefeature;
        },
        addgptmovies:(state,action)=>{
            const {movieNames,movieResults}=action.payload;
            state.movieNames=movieNames;
            state.movieResults=movieResults;
        }
    }
});
export const {addtogglefeature,addgptmovies}=Gptslice.actions;
export default Gptslice.reducer; 