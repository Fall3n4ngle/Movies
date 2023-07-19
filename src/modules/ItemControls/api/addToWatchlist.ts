import { axiosInstance } from "@app/api/axiosInstance";
import { AxiosResponse } from "axios";
import { IResponse } from "@models";

import { IAddToWatchlistRequest } from "../models/AddToWatchlistRequest";

export const addToWatchlist = async ({
  account_id,
  media_id,
  media_type,
  watchlist,
}: IAddToWatchlistRequest) => {
  const response: AxiosResponse<IResponse> = await axiosInstance.post(
    `/3/account/${account_id}/watchlist`,
    {
      media_id,
      media_type,
      watchlist,
    }
  );

  return response.data;
};
