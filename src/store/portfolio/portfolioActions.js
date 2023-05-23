import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPortfolio = createAsyncThunk(
  "portfolio/fetchPortfolio",
  async () => {
    const response = await axios.get(
      "http://10.138.1.35:8000/api/v1/portfolios"
    );
    return response.data;
  }
);
