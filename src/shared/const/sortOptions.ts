import { SortBy } from "../../models/SortBy";

interface Option {
  value: SortBy;
  label: string;
}

export const sortOptions: Option[] = [
  { label: "Oldest", value: "release_date.asc" },
  { label: "Newest", value: "release_date.desc" },
  { label: "A-Z", value: "title.asc" },
  { label: "Z-A", value: "title.desc" },
  { label: "Lowest rating", value: "vote_average.asc" },
  { label: "Highest rating", value: "vote_average.desc" },
];
