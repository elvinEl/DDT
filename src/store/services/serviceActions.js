import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchServices = createAsyncThunk(
  "services/fetchServices",
  async () => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const response = await axios.get(`${baseUrl}/services`);
    return response.data;
  }
);

export const fetchServicesBySlug = createAsyncThunk(
  "services/fetchServicesBySlug",
  async (payload) => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const response = await axios.get(`${baseUrl}/services/${payload.slug}`,{
      headers: {
        language: payload.language,
        general_key: payload.dataS.general_key,
      },
    });
    return response.data;
  }
);