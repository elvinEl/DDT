import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPortfolio = createAsyncThunk(
  "portfolio/fetchPortfolio",
  async () => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const response = await axios.get(
      `${baseUrl}/portfolios`
    );
    return response.data;
  }
);
