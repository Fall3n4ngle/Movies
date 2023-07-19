import { AxiosResponse } from "axios";
import { axiosInstance } from "@app/api/axiosInstance";

import { IListOperationRequest } from "../models/ListOperationRequest";
import { IListOperationResponse } from "../models/ListOperationResponse";

export const deleteFromList = async ({ items, list_id }: IListOperationRequest) => {
  const response: AxiosResponse<IListOperationResponse> = await axiosInstance.delete(
    `/4/list/${list_id}/items`,
    {
      data: {
        items,
      },
    }
  );

  return response.data;
};
