import { axiosInstance } from "@app/api/axiosInstance";
import { AxiosResponse } from "axios";

import { IListOperationRequest } from "../models/ListOperationRequest";
import { IListOperationResponse } from "../models/ListOperationResponse";

export const addToList = async ({ items, list_id }: IListOperationRequest) => {
  const response: AxiosResponse<IListOperationResponse> = await axiosInstance.post(
    `/4/list/${list_id}/items`,
    { items }
  );

  return response.data;
};
