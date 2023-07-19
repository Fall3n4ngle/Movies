import { axiosInstance } from "@app/api/axiosInstance";

import { AxiosResponse } from "axios";

import { IQuery } from "../../../models";

import { IMovie } from "../models/Movie";
import { Person } from "../models/Person";
import { Show } from "../models/Show";

export const getSearchResults = async ({ query }: { query: string }) => {
  const response: AxiosResponse<IQuery<IMovie | Person | Show>> = await axiosInstance.get(
    "/3/search/multi",
    {
      params: {
        query: encodeURIComponent(query),
      },
    }
  );

  return response.data;
};
