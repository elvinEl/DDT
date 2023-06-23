import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPartners = createAsyncThunk(
  "partners/fetchPartners",
  async (payload) => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const response = await axios.get(
      `${baseUrl}/partners`,{
        headers:{
          language:payload.language
        }
      }
    );
    return response.data;
  }
);


