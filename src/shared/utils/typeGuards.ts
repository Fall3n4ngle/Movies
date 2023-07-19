import { IMovie, IShow } from "@models";

export const isMovie = (object: IMovie | IShow): object is IMovie => {
  return "title" in object;
};

export const isShow = (object: IMovie | IShow): object is IShow => {
  return "name" in object;
};
