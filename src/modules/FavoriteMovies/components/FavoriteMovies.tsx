import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Title } from "@mantine/core";
import { useAuthContext } from "@app/providers/AuthProvider";
import { CardsList } from "@components";

import { getFavoriteMovies } from "../api/getFavoriteMovies";

export const FavoriteMovies = () => {
  const { auth } = useAuthContext();

  const [page, setPage] = useState(1);

  const { data: movies, isFetching } = useQuery({
    queryKey: ["movie", "favorite", { page }],
    queryFn: () =>
      getFavoriteMovies({
        accountId: auth.accountId!,
        page,
      }),
    enabled: !!auth.accountId,
    suspense: false,
  });

  return (
    <>
      <Title order={2}>Favorite movies</Title>
      <CardsList
        data={movies?.results ?? []}
        genresType="movie"
        isFetching={isFetching}
        nothingFoundMessage="No favorite movies "
        onPageChange={setPage}
        page={page}
        totalPages={movies?.total_pages ?? 0}
      />
    </>
  );
};
