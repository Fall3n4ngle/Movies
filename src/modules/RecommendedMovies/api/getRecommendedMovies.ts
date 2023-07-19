import { axiosInstance } from "@app/api/axiosInstance";
import { IMovie, IQuery, SortBy } from "@models";
import { AxiosResponse } from "axios";

interface Props {
  accountId: string;
  page: number;
  sortBy: SortBy;
}

export const getRecommendedMovies = async ({ accountId, page, sortBy }: Props) => {
  const response: AxiosResponse<IQuery<IMovie>> = await axiosInstance.get(
    `/4/account/${accountId}/movie/recommendations`,
    {
      params: {
        page,
        sortBy,
      },
    }
  );

  return response.data;
};
