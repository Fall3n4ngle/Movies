import { SortBy } from "./SortBy";

export interface IFilters {
  sort_by?: SortBy | null;
  release_date?: {
    lte: number;
    gte: number;
  };
  vote_average?: {
    lte: number;
    gte: number;
  };
  with_runtime?: {
    lte: number;
    gte: number;
  };
  with_genres?: number[];
  without_genres?: number[];
}
