import { IEpisode } from "./Episode";
import { IGenre } from "./Genre";
import { IProductionCompany } from "./ProductionCompany";
import { IProductionCountry } from "./ProductionCountry";
import { ISeason } from "./Season";
import { ISpokenLanguage } from "./SpokenLanguage";

interface CreatedBy {
  id: number;
  credit_id?: string;
  name?: string;
  gender?: number;
  profile_path?: string | null;
}

interface Network {
  id: number;
  name?: string;
  logo_path?: string | null;
  origin_country?: string;
}

interface Season extends Omit<ISeason, "episodes"> {
  episode_count: number;
}

export interface IShow {
  id?: number;
  overview?: string;
  poster_path?: string | null;
  backdrop_path: string | null;
  original_language?: string;
  vote_average?: number;
  vote_count?: number;
  popularity?: number;
  first_air_date?: string;
  origin_country?: string[];
  original_name?: string;
  name?: string;
  genre_ids?: number[];
}

export interface IShowDetails extends IShow {
  created_by?: CreatedBy[];
  episode_run_time?: number[];
  genres?: IGenre[];
  homepage?: string;
  in_production?: boolean;
  languages?: string[];
  last_air_date?: string;
  last_episode_to_air?: Omit<IEpisode, "guest_stars" | "crew"> | null;
  next_episode_to_air?: null;
  networks?: Network[];
  number_of_episodes?: number;
  number_of_seasons?: number;
  production_companies?: IProductionCompany[];
  production_countries?: IProductionCountry[];
  seasons?: Season[];
  spoken_languages?: ISpokenLanguage[];
  status?: string;
  tagline?: string;
  type?: string;
}
