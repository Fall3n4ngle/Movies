import { ICast } from "./Cast";
import { ICrew } from "./Crew";

export interface ICredits {
  id: string;
  crew?: ICrew[];
  cast?: ICast[];
}
