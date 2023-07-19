import { axiosInstance } from "@app/api/axiosInstance";
import { AxiosResponse } from "axios";
import { IMovie, IQuery, IShow } from "@models";

export const getItems = async (url: string) => {
  const response: AxiosResponse<IQuery<IMovie | IShow>> = await axiosInstance.get(url);
  return response.data;
};
