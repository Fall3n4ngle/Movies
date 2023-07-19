import { axiosInstance } from "@app/api/axiosInstance";
import { AxiosResponse } from "axios";
import { ICredits } from "@models";

export const getItemCredits = async (itemId: string, variant: "movie" | "tv") => {
  const response: AxiosResponse<ICredits> = await axiosInstance.get(
    `/3/${variant}/${itemId}/credits`
  );

  return response.data;
};
