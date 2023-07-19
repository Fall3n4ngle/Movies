import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Title } from "@mantine/core";
import { useAuthContext } from "@app/providers/AuthProvider";
import { CardsList } from "@components";

import { getFavoriteShows } from "../api/getFavoriteShows";

export const FavoriteShows = () => {
  const { auth } = useAuthContext();

  const [page, setPage] = useState(1);

  const { data: shows, isFetching } = useQuery({
    queryKey: ["tv", "favorite", { page }],
    queryFn: () =>
      getFavoriteShows({
        accountId: auth.accountId!,
        page,
      }),
    enabled: !!auth.accountId,
    suspense: false,
  });

  return (
    <>
      <Title order={2}>Favorite shows</Title>
      <CardsList
        data={shows?.results ?? []}
        genresType="tv"
        isFetching={isFetching}
        nothingFoundMessage="No favorite shows "
        onPageChange={setPage}
        page={page}
        totalPages={shows?.total_pages ?? 0}
      />
    </>
  );
};
