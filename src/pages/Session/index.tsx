import { useAuthContext } from "@app/providers/AuthProvider";
import { API_TOKEN } from "@shared/const/env";
import axios, { AxiosResponse } from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface GetSessionResponse {
  status_message?: string;
  access_token?: string;
  success?: boolean;
  status_code?: number;
  account_id?: string;
}

const getSession = async (requestToken: string | null) => {
  const response: AxiosResponse<GetSessionResponse> = await axios.post(
    "https://api.themoviedb.org/4/auth/access_token",
    {
      request_token: requestToken,
    },
    {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: `Bearer ${API_TOKEN}`,
      },
    }
  );

  return response.data;
};

const SessionPage = () => {
  const { setAuth, auth } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    getSession(auth.requestToken)
      .then((data) => {
        setAuth((prev) => ({
          ...prev,
          accessToken: data.access_token ?? "",
          accountId: data.account_id ?? "",
        }));
      })
      .then(() => navigate(-2));
  }, [setAuth, navigate, auth.requestToken]);

  return null;
};

export default SessionPage;
