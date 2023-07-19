import { IShow, IMovie } from ".";

export interface IList {
  description?: string;
  favorite_count?: number;
  id: number;
  item_count?: number;
  total_results: number;
  iso_639_1?: string;
  list_type?: string;
  name?: string;
  featured?: number;
  revenue?: string;
  public?: boolean;
  updated_at?: string;
  created_at?: string;
  sort_by?: number;
  backdrop_path?: string | null;
  runtime?: number;
  average_rating?: number;
  iso_3166_1?: string;
  adult?: number;
  number_of_items?: number;
  poster_path?: string;
}

interface CreatedBy {
  gravatar_hash?: string;
  name?: string;
  username?: string;
}

export interface IListDetails extends Partial<IList> {
  results?: IMovie[] & IShow[];
  created_by?: CreatedBy;
  comments?: unknown;
}
