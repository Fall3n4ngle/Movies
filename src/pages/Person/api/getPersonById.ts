import { AxiosResponse } from "axios";
import { IPerson } from "@models";
import { axiosInstance } from "@app/api/axiosInstance";

export const getPersonById = async (personId: string) => {
  const response: AxiosResponse<IPerson> = await axiosInstance.get(`/3/person/${personId}`);
  return response.data;
};
