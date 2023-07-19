interface Result {
  media_type: string;
  media_id: number;
  success: boolean;
}

export interface IListOperationResponse {
  status_message: string;
  results: Result[];
  success: boolean;
  status_code: number;
}
