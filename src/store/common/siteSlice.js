import { createSlice } from "@reduxjs/toolkit";

export const siteSlice = createSlice({
  name: "siteSlice",
  initialState: {
    dark: false,
    language: "az",
  },
  reducers: {
    setDarkMode: (state) => {
      state.dark = !state.dark;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { setDarkMode, setLanguage } = siteSlice.actions;

export default siteSlice.reducer;
