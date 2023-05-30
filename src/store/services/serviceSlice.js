import { createSlice } from "@reduxjs/toolkit";
import { fetchServices } from "./serviceActions";

export const serviceSlice = createSlice({
  name: "service",
  initialState: {
    serviceData: [],
    isLoading: false,
    isSuccess: false,
    errorMessage: "",
  },
  reducers: {},
  extraReducers: {
    [fetchServices.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchServices.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.serviceData = payload;
    },
    [fetchServices.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = payload;
    },
  },
});

export default serviceSlice.reducer;
