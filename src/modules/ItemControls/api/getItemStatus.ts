import { axiosInstance } from "@app/api/axiosInstance";
import { AxiosResponse } from "axios";

export interface IGetItemStatusProps {
  list_id: string;
  media_id: number;
  media_type: "movie" | "tv";
}

interface IResponse {
  media_id: string;
  media_type: "movie" | "tv";
  success: boolean;
  status_message: string;
  id: number;
  status_code: number;
}

export const getItemStatus = async ({ media_id, list_id, media_type }: IGetItemStatusProps) => {
  const response: AxiosResponse<IResponse> = await axiosInstance.get(
    `/4/list/${list_id}/item_status`,
    {
      params: { media_id, media_type },
    }
  );

  return response.data;
};
