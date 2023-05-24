import { createSlice } from "@reduxjs/toolkit";
import { fetchServicesBySlug } from "./serviceActions";

export const serviceDetailSlice = createSlice({
  name: "serviceDetail",
  initialState: {
    serviceDataDetail: [],
    isLoading: false,
    isSuccess: false,
    errorMessage: "",
  },
  reducers: {},
  extraReducers: {
    [fetchServicesBySlug.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchServicesBySlug.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.serviceDataDetail = payload;
    },
    [fetchServicesBySlug.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = payload;
    }
    
  },
});

export default serviceDetailSlice.reducer;
