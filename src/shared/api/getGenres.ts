import { AxiosResponse } from "axios";
import { IGenre } from "@models";
import { axiosInstance } from "@app/api/axiosInstance";

type Variant = "movie" | "tv";

export const getGenres = async (variant: Variant) => {
  const response: AxiosResponse<{ genres: IGenre[] }> = await axiosInstance.get(
    `/3/genre/${variant}/list`
  );

  return response.data.genres;
};
