import { SelectItem } from "@mantine/core";
import { IGenre } from "@models";

export const mapGenres = (genre: IGenre): SelectItem => ({
  value: `${genre.id}`,
  label: genre.name ?? "",
});
