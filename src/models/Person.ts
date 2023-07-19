export interface IPerson {
  id: number;
  birthday?: string | null;
  known_for_department?: string;
  deathday?: string | null;
  name?: string;
  also_known_as?: string[];
  gender?: number;
  biography?: string;
  popularity?: number;
  place_of_birth?: string | null;
  profile_path?: string | null;
  adult?: boolean;
  imdb_id?: string;
  homepage?: string | null;
}
