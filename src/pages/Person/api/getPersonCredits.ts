import { AxiosResponse } from "axios";
import { axiosInstance } from "@app/api/axiosInstance";

import { IPersonCredits } from "../models/PersonCredits";

export const getPersonCredits = async (personId: string) => {
  const response: AxiosResponse<IPersonCredits> = await axiosInstance.get(
    `/3/person/${personId}/combined_credits`
  );

  return response.data;
};
