import { IMovie } from "../models/Movie";
import { Person } from "../models/Person";
import { Show } from "../models/Show";

export const isMovie = (object: IMovie | Person | Show): object is IMovie => {
  return object.media_type === "movie";
};

export const isPerson = (object: IMovie | Person | Show): object is Person => {
  return object.media_type === "person";
};

export const isShow = (object: IMovie | Person | Show): object is Show => {
  return object.media_type === "tv";
};
