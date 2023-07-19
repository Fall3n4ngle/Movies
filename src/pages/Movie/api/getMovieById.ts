import { AxiosResponse } from "axios";
import { axiosInstance } from "@app/api/axiosInstance";
import { IMovieDetails } from "@models";

export const getMovieById = async (movieId: string) => {
  const response: AxiosResponse<IMovieDetails> = await axiosInstance.get(`/3/movie/${movieId}`);
  return response.data;
};
