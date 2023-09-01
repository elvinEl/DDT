import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPortfolio = createAsyncThunk(
  "portfolios/fetchPortfolio",
  async (payload) => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const response = await axios.get(
      `${baseUrl}/portfolios`,{
        headers:{
          language:payload.language
        }
      }
    );
    return response.data;
  }
);



export const fetchPortfolioById = createAsyncThunk(
  "portfolios/fetchPortfolioById",
  async (payload) => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const response = await axios.get(
      `${baseUrl}/portfolios/${payload.general_key}`,
      {
        headers:{
          language:payload.language
        }
      }
    );
    return response.data;
  }
);
