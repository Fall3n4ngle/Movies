import { POSTER_PATH } from "@shared/const/env";

import { IMovie } from "../models/Movie";
import { Show } from "../models/Show";
import { Person } from "../models/Person";
import { isMovie, isShow } from "../utils/typeGuards";

export const mapResult = (item: IMovie | Show | Person) => {
  if (isMovie(item)) {
    return {
      value: `${item.id}`,
      image: `${POSTER_PATH}/${item.poster_path}` ?? "",
      year: item.release_date ?? "No data",
      rating: item.vote_average?.toFixed(1) ?? "No data",
      text: item.title,
      itemId: item.id,
      mediaType: item.media_type,
    };
  } else if (isShow(item)) {
    return {
      value: `${item.id}`,
      image: `${POSTER_PATH}/${item.poster_path}` ?? "",
      year: item.first_air_date ?? "No data",
      rating: item.vote_average?.toFixed(1) ?? "No data",
      text: item.name,
      itemId: item.id,
      mediaType: item.media_type,
    };
  } else {
    return {
      value: `${item.id}`,
      image: `${POSTER_PATH}/${item.profile_path}` ?? "",
      rating: item.popularity?.toFixed(1) ?? "No data",
      text: item.name,
      itemId: item.id,
      mediaType: item.media_type,
    };
  }
};
