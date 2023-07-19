import axios, { AxiosResponse } from "axios";

interface DeleteAccessTokenResponse {
  status_message?: string;
  success?: boolean;
  status_code?: number;
}

export const deleteAccessToken = async (accessToken: string) => {
  const response: AxiosResponse<DeleteAccessTokenResponse> = await axios.delete(
    "https://api.themoviedb.org/4/auth/access_token",
    {
      data: {
        access_token: accessToken,
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return response.data;
};
