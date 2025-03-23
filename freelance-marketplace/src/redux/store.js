import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import jobReducer from "./slices/jobSlice";
import serviceReducer from "./slices/serviceSlice";
import contractReducer from "./slices/contractSlice";
import paymentReducer from "./slices/paymentSlice";
import notificationReducer from "./slices/notificationSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    jobs: jobReducer,
    services: serviceReducer,
    contracts: contractReducer,
    payments: paymentReducer,
    notifications: notificationReducer,
  },
});

export default store;
