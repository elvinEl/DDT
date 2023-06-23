import { createSlice } from "@reduxjs/toolkit";
import {fetchContact} from './contactActions'

export const contactSlice = createSlice({
    name:"contact",
    initialState:{
        contactData:[],
        isLoading:false,
        isSuccess:false,
        errorMessage:""
    },
    reducers:{},
    extraReducers:{
        [fetchContact.pending]:(state)=>{
            state.isLoading  = true
        },
        [fetchContact.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.contactData = payload;
          },
          [fetchContact.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.errorMessage = payload;
          },
    }

})

export default contactSlice.reducer