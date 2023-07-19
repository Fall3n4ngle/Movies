export interface IPersonCast {
  id: number;
  original_language?: string;
  episode_count?: number;
  overview?: string;
  origin_country?: string[];
  original_name?: string;
  genre_ids?: number[];
  name?: string;
  media_type?: "movie" | "tv";
  poster_path?: string | null;
  first_air_date?: string;
  vote_average?: number;
  vote_count?: number;
  character: string;
  backdrop_path?: string | null;
  popularity?: number;
  credit_id?: string;
  original_title?: string;
  video?: boolean;
  release_date?: string;
  title?: string;
  adult?: boolean;
}

export interface IPersonCrew {
  id: number;
  department?: string;
  original_language?: string;
  episode_count?: number;
  job?: string;
  overview?: string;
  origin_country?: string[];
  original_name?: string;
  vote_count?: number;
  name?: string;
  media_type?: "tv" | "movie";
  popularity?: number;
  credit_id?: string;
  backdrop_path?: string | null;
  first_air_date?: string;
  vote_average?: number;
  genre_ids?: number[];
  poster_path?: string | null;
  original_title?: string;
  video?: boolean;
  title?: string;
  adult?: boolean;
  release_date?: string;
}

export interface IPersonCredits {
  id?: number;
  cast?: IPersonCast[];
  crew?: IPersonCrew[];
}