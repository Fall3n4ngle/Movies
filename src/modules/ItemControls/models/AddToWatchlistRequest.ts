export interface IAddToWatchlistRequest {
  media_type: "movie" | "tv";
  media_id: number;
  watchlist: boolean;
  account_id: string;
}
