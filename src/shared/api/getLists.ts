import { AxiosResponse } from "axios";
import { IList, IQuery } from "@models";
import { axiosInstance } from "@app/api/axiosInstance";

export const getLists = async (account_id: string) => {
  const response: AxiosResponse<IQuery<IList>> = await axiosInstance.get(
    `/4/account/${account_id}/lists`
  );

  return response.data;
};
