import { createSlice } from "@reduxjs/toolkit";
import { fetchServicesById } from "./serviceActions";

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
    [fetchServicesById.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchServicesById.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.serviceDataDetail = payload;
    },
    [fetchServicesById.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = payload;
    }
    
  },
});

export default serviceDetailSlice.reducer;
