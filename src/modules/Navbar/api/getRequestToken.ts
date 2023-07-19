import { API_TOKEN } from "@shared/const/env";
import axios, { AxiosResponse } from "axios";

interface GetRequestTokenResponse {
  success?: boolean;
  status_code?: number;
  request_token?: string;
  status_message?: string;
}

export const getRequestToken = async () => {
  const response: AxiosResponse<GetRequestTokenResponse> = await axios.post(
    "https://api.themoviedb.org/4/auth/request_token",
    {
      redirect_to: "http://127.0.0.1:5173/session",
    },
    {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: `Bearer ${API_TOKEN}`,
      },
    }
  );

  const requestToken = response.data.request_token;

  window.location.href = `https://www.themoviedb.org/auth/access?request_token=${requestToken}&redirect_to=http://127.0.0.1:5173/session`;

  return requestToken;
};
