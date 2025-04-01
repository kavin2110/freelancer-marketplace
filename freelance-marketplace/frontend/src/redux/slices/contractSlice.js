import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/api/contracts";

export const fetchContracts = createAsyncThunk("contracts/fetchAll", async (token) => {
  const response = await axios.get(API_URL, { headers: { Authorization: `Bearer ${token}` } });
  return response.data;
});

const contractSlice = createSlice({
  name: "contracts",
  initialState: { contracts: [], loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchContracts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchContracts.fulfilled, (state, action) => {
      state.loading = false;
      state.contracts = action.payload;
    });
  },
});

export default contractSlice.reducer;
