import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFeatures = createAsyncThunk(
  "features/fetchFeatures",
  async (payload) => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const response = await axios.get(
      `${baseUrl}/features`,{
        headers:{
          language:payload.language
        }
      }
    );
    return response.data;
  }
);


