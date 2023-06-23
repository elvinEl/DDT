import { createSlice } from "@reduxjs/toolkit";
import { fetchAbout } from "./aboutActions";

export const aboutSlice = createSlice({
  name: "about",
  initialState: {
    aboutData: [],
    isLoading: false,
    isSuccess: false,
    errorMessage: "",
  },
  reducers: {},
  extraReducers: {
    [fetchAbout.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchAbout.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.aboutData = payload;
    },
    [fetchAbout.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = payload;
    },
  },
});

export default aboutSlice.reducer;
