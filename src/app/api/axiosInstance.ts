import axios from "axios";

import { API_KEY } from "@shared/const/env";

const auth = localStorage.getItem("auth") ? JSON.parse(localStorage.getItem("auth")!) : null;

export const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org",
  params: {
    api_key: API_KEY,
  },
  headers: {
    Authorization: `Bearer ${auth?.accessToken}`,
    "Content-Type": "application/json",
  },
});
