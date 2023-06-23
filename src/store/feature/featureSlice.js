import { createSlice } from "@reduxjs/toolkit";
import {fetchFeatures} from './featureAction'

export const featuresSlice = createSlice({
    name:"feature",
    initialState:{
        featureData:[],
        isLoading:false,
        isSuccess:false,
        errorMessage:""
    },
    reducers:{},
    extraReducers:{
        [fetchFeatures.pending]:(state)=>{
            state.isLoading  = true
        },
        [fetchFeatures.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.featureData = payload;
          },
          [fetchFeatures.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.errorMessage = payload;
          },
    }

})

export default featuresSlice.reducer