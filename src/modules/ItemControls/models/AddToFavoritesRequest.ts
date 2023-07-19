export interface IAddToFavoritesRequest {
  media_type: "movie" | "tv";
  media_id: number;
  favorite: boolean;
  account_id: string;
}
