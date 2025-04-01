import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createJob, getAllJobs } from "../../api/jobApi";

export const fetchJobs = createAsyncThunk("jobs/fetchAll", async () => {
  return await getAllJobs();
});

const jobSlice = createSlice({
  name: "jobs",
  initialState: { jobs: [], loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchJobs.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchJobs.fulfilled, (state, action) => {
      state.loading = false;
      state.jobs = action.payload;
    });
  },
});

export default jobSlice.reducer;
