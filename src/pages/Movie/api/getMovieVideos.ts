import { axiosInstance } from "@app/api/axiosInstance";
import { AxiosResponse } from "axios";
import { IVideos } from "@models";

export const getMovieVideos = async (movieId: string) => {
  const response: AxiosResponse<IVideos> = await axiosInstance.get(`/3/movie/${movieId}/videos`);
  return response.data;
};
