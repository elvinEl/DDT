import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchServices = createAsyncThunk(
  "services/fetchServices",
  async (payload) => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const response = await axios.get(`${baseUrl}/services`, {
      headers: {
        language: payload.language,
      },
    });
    return response.data;
  }
);

export const fetchServicesById = createAsyncThunk(
  "services/fetchServicesById",
  async (payload) => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const response = await axios.get(
      `${baseUrl}/services/${payload.dataS.general_key}`,
      {
        headers: {
          language: payload.language,
        },
      }
    );
    return response.data;
  }
);
