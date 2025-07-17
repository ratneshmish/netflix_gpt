import { createSlice } from "@reduxjs/toolkit";

const Movieslice=createSlice({
    name:"Movies",
    initialState:{
        nowplayingmovies:null,
        trailerid:null,
        Popular:null,
        Upcoming:null,
        TopRated:null,
    },
    reducers:{
        addNowplayingMovies:(state,action)=>{
            state.nowplayingmovies=action.payload;
        },
        addtrailer:(state,action)=>{
            state.trailerid=action.payload;
        },
        addPopular:(state,action)=>{
            state.Popular=action.payload;
        },
         addUpcoming:(state,action)=>{
            state.Upcoming=action.payload;
        },
         addTopRated:(state,action)=>{
            state.TopRated=action.payload;
        },
    },
});
export const {addNowplayingMovies,addtrailer,addPopular,addTopRated,addUpcoming}=Movieslice.actions;
export default Movieslice.reducer;