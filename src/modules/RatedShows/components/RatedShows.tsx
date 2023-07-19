import { useAuthContext } from "@app/providers/AuthProvider";
import { useState } from "react";

import { useQuery } from "@tanstack/react-query";
import { CardsListWithSort } from "@components";

import { SortBy } from "../../../models";

import { getRatedShows } from "../api/getRatedShows";

export const RatedShows = () => {
  const { auth } = useAuthContext();

  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState<SortBy>("vote_average.desc");

  const { data: movies, isFetching } = useQuery({
    queryKey: ["tv", "rated", { page, sortBy }],
    queryFn: () =>
      getRatedShows({
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
      genresType="tv"
      isFetching={isFetching}
      nothingFoundMessage="No rated shows yet"
      onChangeSortBy={setSortBy}
      onPageChange={setPage}
      page={page}
      sortBy={sortBy}
      title="Rated Shows"
      totalPages={movies?.total_pages ?? 0}
    />
  );
};
