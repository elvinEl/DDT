import { createSlice } from "@reduxjs/toolkit";
import {fetchPartners} from './partnersActions'

export const partnersSlice = createSlice({
    name:"partners",
    initialState:{
        partnersData:[],
        isLoading:false,
        isSuccess:false,
        errorMessage:""
    },
    reducers:{},
    extraReducers:{
        [fetchPartners.pending]:(state)=>{
            state.isLoading  = true
        },
        [fetchPartners.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.partnersData = payload;
          },
          [fetchPartners.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.errorMessage = payload;
          },
    }

})

export default partnersSlice.reducer