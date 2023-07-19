import { FC } from "react";
import { Flex, Pagination, Text } from "@mantine/core";
import { IMovie, IShow } from "@models";
import { getGenres } from "@shared/api/getGenres";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

import { filterGenres } from "@shared/utils/filterGenres";
import { POSTER_PATH } from "@shared/const/env";
import { isMovie } from "@shared/utils/typeGuards";

import { ItemCard } from "./cards/ItemCard";
import { CardsListSkeleton } from "./skeletons/CardsListSkeleton";
import { CardsWrapper } from "./CardsWrapper";

interface Props {
  page: number;
  // eslint-disable-next-line no-unused-vars
  onPageChange(page: number): void;
  totalPages: number;
  data: (IMovie | IShow)[];
  genresType: "movie" | "tv";
  nothingFoundMessage: string;
  isFetching: boolean;
}

export const CardsList: FC<Props> = ({
  data,
  onPageChange,
  page,
  totalPages,
  genresType,
  nothingFoundMessage,
  isFetching,
}) => {
  const { data: genres } = useQuery({
    queryKey: ["genres", genresType],
    queryFn: () => getGenres(genresType),
  });

  if (isFetching) {
    return <CardsListSkeleton />;
  }

  if (!data.length) {
    return <Text>{nothingFoundMessage}</Text>;
  }

  return (
    <>
      <CardsWrapper>
        {data.map((item) => (
          <Link to={`/${genresType}/${item.id}`} key={item.id}>
            <ItemCard
              genres={filterGenres(genres, item.genre_ids)}
              posterPath={`${POSTER_PATH}/${item.poster_path}`}
              voteAverage={item.vote_average ?? 0}
              title={(isMovie(item) ? item.title : item.name) ?? ""}
            />
          </Link>
        ))}
      </CardsWrapper>
      {totalPages > 1 && (
        <Flex justify="center" align="center" mt="xl">
          <Pagination total={totalPages} value={page} onChange={onPageChange} />
        </Flex>
      )}
    </>
  );
};
