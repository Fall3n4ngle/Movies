import { IGenre } from "./Genre";
import { IProductionCompany } from "./ProductionCompany";
import { IProductionCountry } from "./ProductionCountry";
import { ISpokenLanguage } from "./SpokenLanguage";

export interface IMovie {
  id: number;
  poster_path?: string | null;
  adult?: boolean;
  overview?: string;
  original_title?: string;
  release_date?: string;
  original_language?: string;
  title?: string;
  popularity?: number;
  backdrop_path?: string | null;
  vote_average?: number;
  vote_count?: number;
  video?: boolean;
  genre_ids?: number[];
}

export interface IMovieDetails extends IMovie {
  belongs_to_collection?: null;
  budget?: number;
  genres?: IGenre[];
  homepage?: string;
  imdb_id?: string;
  production_companies?: IProductionCompany[];
  production_countries?: IProductionCountry[];
  revenue?: number;
  runtime?: number;
  spoken_languages?: Omit<ISpokenLanguage, "english_name">[];
  status?: string;
  tagline?: string;
}
