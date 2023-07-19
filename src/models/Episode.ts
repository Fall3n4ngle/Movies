import { ICast } from "./Cast";
import { ICrew } from "./Crew";
import { ICredits } from "./Credits";

type Crew = Pick<ICrew, "id" | "credit_id" | "name" | "department" | "job" | "profile_path">;

type GuestStar = Pick<ICast, "id" | "name" | "credit_id" | "character" | "order" | "profile_path">;

export interface IEpisode {
  id: number;
  air_date?: string;
  episode_number?: number;
  name?: string;
  overview?: string;
  production_code?: string | null;
  season_number?: number;
  still_path?: string | null;
  vote_average?: number;
  vote_count?: number;
  guest_stars?: GuestStar[];
  crew?: Crew[];
}

export interface IEpisodeCredits extends ICredits {
  guest_stars?: GuestStar[];
}
