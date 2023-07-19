import { IMovie as IBaseMovie, IAccountRating } from "../../../models";

export interface IMovie extends IBaseMovie {
  account_rating?: IAccountRating;
}
