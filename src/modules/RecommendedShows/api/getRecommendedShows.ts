import { axiosInstance } from "@app/api/axiosInstance";
import { IQuery, SortBy, IShow } from "@models";
import { AxiosResponse } from "axios";

interface Props {
  accountId: string;
  page: number;
  sortBy: SortBy;
}

export const getRecommendedShows = async ({ accountId, page, sortBy }: Props) => {
  const response: AxiosResponse<IQuery<IShow>> = await axiosInstance.get(
    `/4/account/${accountId}/tv/recommendations`,
    {
      params: {
        page,
        sortBy,
      },
    }
  );

  return response.data;
};
