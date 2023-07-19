import { useLocalStorage } from "@mantine/hooks";

import { IFilters } from "@models";

export const useFilters = (key: string) => {
  const [filters, setFilters] = useLocalStorage<Required<IFilters>>({
    key,
    defaultValue: {
      release_date: {
        gte: 1900,
        lte: new Date().getFullYear(),
      },
      sort_by: "vote_average.desc",
      vote_average: {
        gte: 8,
        lte: 10,
      },
      with_genres: [],
      without_genres: [],
      with_runtime: {
        gte: 60,
        lte: 300,
      },
    },
  });

  const setAllFilters = (newFilters: IFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  return {
    filters,
    setAllFilters,
  };
};
