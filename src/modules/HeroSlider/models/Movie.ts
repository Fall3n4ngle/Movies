import { IMovie } from "../../../models";

export interface Movie
  extends Pick<
    IMovie,
    | "poster_path"
    | "adult"
    | "overview"
    | "release_date"
    | "original_title"
    | "id"
    | "original_language"
    | "title"
    | "backdrop_path"
    | "popularity"
    | "vote_count"
    | "video"
    | "vote_average"
  > {
  genre_ids?: number[];
  media_type: "movie";
}
