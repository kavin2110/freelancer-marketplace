import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createService, getAllServices } from "../../api/serviceApi";

export const fetchServices = createAsyncThunk("services/fetchAll", async () => {
  return await getAllServices();
});

const serviceSlice = createSlice({
  name: "services",
  initialState: { services: [], loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchServices.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchServices.fulfilled, (state, action) => {
      state.loading = false;
      state.services = action.payload;
    });
  },
});

export default serviceSlice.reducer;
