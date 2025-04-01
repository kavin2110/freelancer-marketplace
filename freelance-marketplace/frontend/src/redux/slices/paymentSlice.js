import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Get API URL from environment variables
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

// Async thunk to create a Razorpay order
export const createPayment = createAsyncThunk(
  "payment/createPayment",
  async (paymentData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/api/payments/create`, paymentData);
      return response.data; // Returns the payment order details
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk to verify Razorpay payment
export const verifyPayment = createAsyncThunk(
  "payment/verifyPayment",
  async (paymentVerificationData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/api/payments/verify`, paymentVerificationData);
      return response.data; // Returns success or failure
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    paymentOrder: null,
    paymentStatus: null,
    loading: false,
    error: null,
  },
  reducers: {
    resetPaymentState: (state) => {
      state.paymentOrder = null;
      state.paymentStatus = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPayment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createPayment.fulfilled, (state, action) => {
        state.loading = false;
        state.paymentOrder = action.payload;
      })
      .addCase(createPayment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(verifyPayment.pending, (state) => {
        state.loading = true;
      })
      .addCase(verifyPayment.fulfilled, (state, action) => {
        state.loading = false;
        state.paymentStatus = action.payload;
      })
      .addCase(verifyPayment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetPaymentState } = paymentSlice.actions;
export default paymentSlice.reducer;
