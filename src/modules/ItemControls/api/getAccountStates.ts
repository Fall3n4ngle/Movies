import { axiosInstance } from "@app/api/axiosInstance";
import { AxiosResponse } from "axios";
import { IAccountStates } from "@models";

export const getAccountStates = async (itemId: number, variant: "movie" | "tv") => {
  const response: AxiosResponse<IAccountStates> = await axiosInstance.get(
    `/3/${variant}/${itemId}/account_states`
  );

  return response.data;
};
