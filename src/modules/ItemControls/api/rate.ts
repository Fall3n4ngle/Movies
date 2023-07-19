import { AxiosResponse } from "axios";
import { IResponse } from "@models";
import { axiosInstance } from "@app/api/axiosInstance";

export interface IRateItemRequest {
  value: number;
  media_id: number;
  media_type: "movie" | "tv";
}

export const rate = async ({ value, media_id, media_type }: IRateItemRequest) => {
  const response: AxiosResponse<IResponse> = await axiosInstance.post(
    `/3/${media_type}/${media_id}/rating`,
    { value }
  );

  return response.data;
};
