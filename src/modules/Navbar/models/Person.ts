import { IPerson } from "../../../models";

export interface Person
  extends Pick<IPerson, "profile_path" | "id" | "adult" | "name" | "popularity"> {
  media_type: "person";
}
