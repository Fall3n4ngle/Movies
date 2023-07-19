import { IMovie as IBaseMovie } from "../../../models";

export interface IMovie extends IBaseMovie {
  media_type: "movie";
}
