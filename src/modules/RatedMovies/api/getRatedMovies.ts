import { axiosInstance } from "@app/api/axiosInstance";

import { AxiosResponse } from "axios";

import { IQuery, SortBy } from "../../../models";

import { IMovie } from "../models/Movie";

interface Props {
  accountId: string;
  page: number;
  sortBy: SortBy;
}

export const getRatedMovies = async ({ accountId, page, sortBy }: Props) => {
  const response: AxiosResponse<IQuery<IMovie>> = await axiosInstance.get(
    `/4/account/${accountId}/movie/rated`,
    {
      params: {
        page,
        sortBy,
      },
    }
  );

  return response.data;
};
