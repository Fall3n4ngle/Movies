import { AxiosResponse } from "axios";
import { IQuery, IReview } from "@models";
import { axiosInstance } from "@app/api/axiosInstance";

export const getItemReviews = async (itemId: string, variant: "movie" | "tv") => {
  const response: AxiosResponse<IQuery<IReview>> = await axiosInstance.get(
    `/3/${variant}/${itemId}/reviews`
  );

  return response.data;
};
