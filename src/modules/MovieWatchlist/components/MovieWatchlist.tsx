import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { SortBy } from "@models";
import { useAuthContext } from "@app/providers/AuthProvider";
import { CardsListWithSort } from "@components";

import { getMovieWatchlist } from "../api/getMovieWatchlist";

export const MovieWatchlist = () => {
  const { auth } = useAuthContext();

  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState<SortBy>("vote_average.desc");

  const { data: movies, isFetching } = useQuery({
    queryKey: ["movie", "watchlist", { page, sortBy }],
    queryFn: () =>
      getMovieWatchlist({
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
      nothingFoundMessage="No movies in watchlist"
      onChangeSortBy={setSortBy}
      onPageChange={setPage}
      page={page}
      sortBy={sortBy}
      title="Movies watchlist"
      totalPages={movies?.total_pages ?? 0}
    />
  );
};
