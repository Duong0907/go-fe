import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 100000,
  mode: "cors",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
