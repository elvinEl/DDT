import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContact = createAsyncThunk(
  "contact/fetchContact",
  async (payload) => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const response = await axios.get(
      `${baseUrl}/general-data`,{
        headers:{
          language:payload.language
        }
      }
    );
    return response.data;
  }
);


