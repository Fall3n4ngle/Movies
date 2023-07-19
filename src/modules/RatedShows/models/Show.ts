import { IAccountRating, IShow as IBaseShow } from "../../../models";

export interface IShow extends IBaseShow {
  account_rating?: IAccountRating;
}
