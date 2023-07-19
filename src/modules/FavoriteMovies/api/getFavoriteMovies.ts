import { axiosInstance } from "@app/api/axiosInstance";
import { IMovie, IQuery } from "@models";
import { AxiosResponse } from "axios";

interface Props {
  accountId: string;
  page: number;
}

export const getFavoriteMovies = async ({ accountId, page }: Props) => {
  const response: AxiosResponse<IQuery<IMovie>> = await axiosInstance.get(
    `/4/account/${accountId}/movie/favorites`,
    {
      params: {
        page,
      },
    }
  );

  return response.data;
};
