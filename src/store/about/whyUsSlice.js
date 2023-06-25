import { createSlice } from "@reduxjs/toolkit";
import { fetchAboutWhyUs } from "./aboutActions";

export const whyUsSlice = createSlice({
  name: "whyUs",
  initialState: {
    whyUsData: [],
    isLoading: false,
    isSuccess: false,
    errorMessage: "",
  },
  reducers: {},
  extraReducers: {
    [fetchAboutWhyUs.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchAboutWhyUs.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.whyUsData = payload;
    },
    [fetchAboutWhyUs.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = payload;
    },
  },
});

export default whyUsSlice.reducer;
