export interface IQuery<ResultType> {
  page: number;
  results: ResultType[];
  total_results: number;
  total_pages: number;
}
