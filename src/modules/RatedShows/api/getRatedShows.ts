import { axiosInstance } from "@app/api/axiosInstance";

import { AxiosResponse } from "axios";

import { IQuery, SortBy } from "../../../models";

import { IShow } from "../models/Show";

interface Props {
  accountId: string;
  page: number;
  sortBy: SortBy;
}

export const getRatedShows = async ({ accountId, page, sortBy }: Props) => {
  const response: AxiosResponse<IQuery<IShow>> = await axiosInstance.get(
    `/4/account/${accountId}/tv/rated`,
    {
      params: {
        page,
        sortBy,
      },
    }
  );

  return response.data;
};
