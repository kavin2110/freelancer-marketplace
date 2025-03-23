import axios from "axios";

const API_URL = "http://localhost:5000/api/jobs";

export const createJob = async (token, jobData) => {
  const response = await axios.post(API_URL, jobData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const getAllJobs = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
