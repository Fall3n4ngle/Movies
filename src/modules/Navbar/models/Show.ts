import { IMovie } from "./Movie";

export interface Show
  extends Omit<
    IMovie,
    "adult" | "release_date" | "original_title" | "title" | "video" | "media_type"
  > {
  origin_country?: string[];
  media_type: "tv";
  first_air_date?: string;
  original_name?: string;
  name?: string;
}
