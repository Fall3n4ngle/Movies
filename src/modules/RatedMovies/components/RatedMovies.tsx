import { useAuthContext } from "@app/providers/AuthProvider";
import { useState } from "react";

import { useQuery } from "@tanstack/react-query";
import { CardsListWithSort } from "@components";

import { SortBy } from "../../../models";

import { getRatedMovies } from "../api/getRatedMovies";

export const RatedMovies = () => {
  const { auth } = useAuthContext();

  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState<SortBy>("vote_average.desc");

  const { data: movies, isFetching } = useQuery({
    queryKey: ["movie", "rated", { page, sortBy }],
    queryFn: () =>
      getRatedMovies({
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
      nothingFoundMessage="No rated movies yet"
      onChangeSortBy={setSortBy}
      onPageChange={setPage}
      page={page}
      sortBy={sortBy}
      title="Rated Movies"
      totalPages={movies?.total_pages ?? 0}
    />
  );
};
