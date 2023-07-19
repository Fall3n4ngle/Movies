import { AxiosResponse } from "axios";
import { axiosInstance } from "@app/api/axiosInstance";

import { IShowDetails } from "@models";

export const getShowById = async (showId: string) => {
  const response: AxiosResponse<IShowDetails> = await axiosInstance.get(`/3/tv/${showId}`);
  return response.data;
};
