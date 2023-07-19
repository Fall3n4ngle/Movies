export interface IItem {
  media_type: "movie" | "tv";
  media_id: number;
}

export interface IListOperationRequest {
  list_id: string;
  items: IItem[];
}
