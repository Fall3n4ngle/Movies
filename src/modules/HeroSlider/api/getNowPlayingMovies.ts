import { axiosInstance } from "@app/api/axiosInstance";
import { AxiosResponse } from "axios";

import { IQuery } from "../../../models/Query";
import { Movie } from "../models/Movie";

export const getNowPlayingMovies = async () => {
  const response: AxiosResponse<IQuery<Movie>> = await axiosInstance.get("/3/movie/now_playing");
  return response.data;
};
