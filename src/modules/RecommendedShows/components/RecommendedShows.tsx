import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { SortBy } from "@models";
import { useAuthContext } from "@app/providers/AuthProvider";

import { getRecommendedShows } from "../api/getRecommendedShows";
import { CardsListWithSort } from "../../../components/CardsListWithSort";

export const RecommendedShows = () => {
  const { auth } = useAuthContext();

  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState<SortBy>("vote_average.desc");

  const { data: shows, isFetching } = useQuery({
    queryKey: ["tv", "recommended", { page, sortBy }],
    queryFn: () =>
      getRecommendedShows({
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
      genresType="tv"
      isFetching={isFetching}
      nothingFoundMessage="No recommended shows "
      onChangeSortBy={setSortBy}
      onPageChange={setPage}
      page={page}
      sortBy={sortBy}
      title="Recommended shows "
      totalPages={shows?.total_pages ?? 0}
    />
  );
};
