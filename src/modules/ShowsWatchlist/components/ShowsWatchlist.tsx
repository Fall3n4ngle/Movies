import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { SortBy } from "@models";
import { useAuthContext } from "@app/providers/AuthProvider";

import { CardsListWithSort } from "@components";

import { getShowsWatchlist } from "../api/getShowsWatchlist";

export const ShowsWatchlist = () => {
  const { auth } = useAuthContext();

  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState<SortBy>("vote_average.desc");

  const { data: shows, isFetching } = useQuery({
    queryKey: ["tv", "watchlist", { page, sortBy }],
    queryFn: () =>
      getShowsWatchlist({
        accountId: auth.accountId!,
        page,
        sortBy,
      }),
    enabled: !!auth.accountId,
    suspense: false,
  });

  return (
    <CardsListWithSort
      data={shows?.results ?? []}
      genresType="movie"
      isFetching={isFetching}
      nothingFoundMessage="No shows in watchlist"
      onChangeSortBy={setSortBy}
      onPageChange={setPage}
      page={page}
      sortBy={sortBy}
      title="Shows watchlist"
      totalPages={shows?.total_pages ?? 0}
    />
  );
};
