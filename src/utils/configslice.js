import { createSlice } from "@reduxjs/toolkit";

const configslice=createSlice({
   name:"lang",
   initialState:{
    language:"en"
   },
   reducers:{
    changelang:(state,action)=>{
        state.language=action.payload;
    },
   }
});
export const {changelang}=configslice.actions;
export default configslice.reducer;