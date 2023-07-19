import { axiosInstance } from "@app/api/axiosInstance";
import { IFilters, IQuery, IShow } from "@models";
import { transformFilters } from "@shared/utils/transformFilters";
import { AxiosResponse } from "axios";

interface Props {
  filters: IFilters;
  page: number;
}

export const discoverShows = async ({ filters, page }: Props) => {
  const response: AxiosResponse<IQuery<IShow>> = await axiosInstance.get("/3/discover/tv", {
    params: {
      page,
      ...transformFilters(filters),
    },
  });

  return response.data;
};
