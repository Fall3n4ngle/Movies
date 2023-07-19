import { axiosInstance } from "@app/api/axiosInstance";
import { AxiosResponse } from "axios";
import { IVideos } from "@models";

export const getShowVideos = async (tvId: string) => {
  const response: AxiosResponse<IVideos> = await axiosInstance.get(`/3/tv/${tvId}/videos`);
  return response.data;
};
