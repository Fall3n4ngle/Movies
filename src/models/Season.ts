import { IEpisode } from "./Episode";

export interface ISeason {
  _id?: string;
  air_date?: string;
  name?: string;
  overview?: string;
  id: number;
  poster_path?: string | null;
  season_number?: number;
  episodes?: IEpisode[];
}
