import { createSlice } from "@reduxjs/toolkit";
import {fetchPortfolio} from './portfolioActions'

export const portfolioSlice = createSlice({
    name:"portfolio",
    initialState:{
        portfolioData:[],
        isLoading:false,
        isSuccess:false,
        errorMessage:""
    },
    reducers:{},
    extraReducers:{
        [fetchPortfolio.pending]:(state)=>{
            state.isLoading  = true
        },
        [fetchPortfolio.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.portfolioData = payload;
          },
          [fetchPortfolio.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.errorMessage = payload;
          },
    }

})

export default portfolioSlice.reducer