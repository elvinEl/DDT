import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchServices = createAsyncThunk(
  "services/fetchServices",
  async () => {
    const response = await axios.get("http://10.138.1.35:8000/api/v1/services");

    return response.data;
  }
);
