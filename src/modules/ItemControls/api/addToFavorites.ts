import { axiosInstance } from "@app/api/axiosInstance";
import { AxiosResponse } from "axios";
import { IResponse } from "@models";

import { IAddToFavoritesRequest } from "../models/AddToFavoritesRequest";

export const addToFavorites = async ({
  account_id,
  favorite,
  media_id,
  media_type,
}: IAddToFavoritesRequest) => {
  const response: AxiosResponse<IResponse> = await axiosInstance.post(
    `/3/account/${account_id}/favorite`,
    {
      favorite,
      media_id,
      media_type,
    }
  );

  return response.data;
};
