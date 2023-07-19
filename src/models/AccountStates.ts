export interface IAccountStates {
  id: number;
  favorite?: boolean;
  rated?:
    | boolean
    | {
        value?: number;
      };
  watchlist?: boolean;
}
