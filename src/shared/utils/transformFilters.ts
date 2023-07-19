import { IFilters } from "../../models/Filters";

export const transformFilters = (filters: IFilters) => ({
  "release_date.gte": filters.release_date?.gte,
  "release_date.lte": filters.release_date?.lte,
  "vote_average.gte": filters.vote_average?.gte,
  "vote_average.lte": filters.vote_average?.lte,
  "with_runtime.gte": filters.with_runtime?.gte,
  "with_runtime.lte": filters.with_runtime?.lte,
  with_genres: filters.with_genres?.join(","),
  without_genres: filters.without_genres?.join(","),
  sort_by: filters.sort_by,
});
