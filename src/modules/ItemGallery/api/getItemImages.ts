import { axiosInstance } from "@app/api/axiosInstance";
import { AxiosResponse } from "axios";
import { IImages } from "@models";

import { IVariant } from "../models/Variant";
import { IPersonImages } from "../models/PersonImages";

export const getItemImages = async (itemId: string, variant: IVariant) => {
  const response: AxiosResponse<IImages | IPersonImages> = await axiosInstance.get(
    `/3/${variant}/${itemId}/images`
  );

  const { data } = response;

  if ("posters" in data && Array.isArray(data.posters)) {
    return data.posters.slice(0, 8);
  } else if ("profiles" in data && Array.isArray(data.profiles)) {
    return data.profiles.slice(0, 8);
  }

  return [];
};
