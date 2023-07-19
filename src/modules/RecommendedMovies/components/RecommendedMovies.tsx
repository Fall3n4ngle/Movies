import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { SortBy } from "@models";
import { useAuthContext } from "@app/providers/AuthProvider";

import { CardsListWithSort } from "@components";

import { getRecommendedMovies } from "../api/getRecommendedMovies";

export const RecommendedMovies = () => {
  const { auth } = useAuthContext();

  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState<SortBy>("vote_average.desc");

  const { data: movies, isFetching } = useQuery({
    queryKey: ["movie", "recommended", { page, sortBy }],
    queryFn: () =>
      getRecommendedMovies({
        accountId: auth.accountId!,
        page,
        sortBy,
      }),
    enabled: !!auth.accountId,
    suspense: false,
  });

  return (
    <CardsListWithSort
      data={movies?.results ?? []}
      genresType="movie"
      isFetching={isFetching}
      nothingFoundMessage="No recommended movies "
      onChangeSortBy={setSortBy}
      onPageChange={setPage}
      page={page}
      sortBy={sortBy}
      title="Recommended movies "
      totalPages={movies?.total_pages ?? 0}
    />
  );
};
