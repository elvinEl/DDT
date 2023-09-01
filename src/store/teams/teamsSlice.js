import { createSlice } from "@reduxjs/toolkit";
import { fetchTeams } from "./teamsActions";

export const teamsSlice = createSlice({
  name: "teams",
  initialState: {
    teamsData: [],
    isLoading: false,
    isSuccess: false,
    errorMessage: "",
  },
  reducers: {},
  extraReducers: {
    [fetchTeams.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchTeams.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.teamsData = payload;
    },
    [fetchTeams.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = payload;
    },
  },
});
export default teamsSlice.reducer;
