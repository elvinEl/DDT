import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAbout = createAsyncThunk(
  "about/fetchAbout",
  async (payload) => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const response = await axios.get(`${baseUrl}/about`, {
      headers: {
        language: payload.language,
      },
    });
    return response.data;
  }
);

export const fetchAboutWhyUs = createAsyncThunk(
  "whyUs/fetchwhyUs",
  async (payload) => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const response = await axios.get(`${baseUrl}/how-we-work`, {
      headers: {
        language: payload.language,
      },
    });
    return response.data;
  }
);
