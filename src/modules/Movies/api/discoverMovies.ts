import { axiosInstance } from "@app/api/axiosInstance";
import { IFilters, IMovie, IQuery } from "@models";
import { transformFilters } from "@shared/utils/transformFilters";
import { AxiosResponse } from "axios";

interface Props {
  filters: IFilters;
  page: number;
}

export const discoverMovies = async ({ filters, page }: Props) => {
  const response: AxiosResponse<IQuery<IMovie>> = await axiosInstance.get("/3/discover/movie", {
    params: {
      page,
      ...transformFilters(filters),
    },
  });

  return response.data;
};
