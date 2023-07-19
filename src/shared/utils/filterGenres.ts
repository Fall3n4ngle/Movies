import { IGenre } from "../../models";

export const filterGenres = (genres?: IGenre[], genre_ids?: number[]) => {
  if (!genre_ids || genre_ids.length === 0) {
    return [];
  }

  return genres?.filter((genre) => genre_ids.includes(genre.id)).slice(0, 3) ?? [];
};
