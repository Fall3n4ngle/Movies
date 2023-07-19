import { AxiosResponse } from "axios";
import { IResponse } from "@models";
import { axiosInstance } from "@app/api/axiosInstance";

export interface IDeleteRatingRequest {
  media_type: "movie" | "tv";
  media_id: number;
}

export const deleteRating = async ({ media_id, media_type }: IDeleteRatingRequest) => {
  const response: AxiosResponse<IResponse> = await axiosInstance.delete(
    `/3/${media_type}/${media_id}/rating`
  );

  return response.data;
};
