import axios from "axios";

const API_URL = "http://localhost:5000/api/services";

export const createService = async (token, serviceData) => {
  const response = await axios.post(API_URL, serviceData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const getAllServices = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
