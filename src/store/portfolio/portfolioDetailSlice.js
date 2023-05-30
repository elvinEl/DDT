import { createSlice } from "@reduxjs/toolkit";
import { fetchPortfolioById } from "./portfolioActions";

export const portfolioDetailSlice = createSlice({
  name: "serviceDetail",
  initialState: {
    portfolioDatadetail: [],
    isLoading: false,
    isSuccess: false,
    errorMessage: "",
  },
  reducers: {},
  extraReducers: {
    [fetchPortfolioById.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchPortfolioById.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.portfolioDatadetail = payload;
    },
    [fetchPortfolioById.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = payload;
    }
    
  },
});

export default portfolioDetailSlice.reducer;
