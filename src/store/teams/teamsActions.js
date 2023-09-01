import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTeams = createAsyncThunk(
  "teams/fetchTeams",
  async (payload) => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const response = await axios.get(`${baseUrl}/teams`, {
      headers: {
        language: payload.language,
      },
    });
    return response.data;
  }
);
