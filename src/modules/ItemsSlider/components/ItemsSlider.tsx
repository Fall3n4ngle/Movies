import { getGenres } from "@shared/api/getGenres";
import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { CardsSlider, ItemCard } from "@components";
import { Carousel } from "@mantine/carousel";
import { Link } from "react-router-dom";
import { filterGenres } from "@shared/utils/filterGenres";
import { POSTER_PATH } from "@shared/const/env";
import { isMovie } from "@shared/utils/typeGuards";

import { getItems } from "../api/getItems";

export interface ItemsSliderProps {
  url: string;
  title?: string;
  queryKey: unknown[];
  variant: "movie" | "tv";
}

export const ItemsSlider: FC<ItemsSliderProps> = ({ url, queryKey, variant }) => {
  const { data: genres } = useQuery({
    queryKey: ["genres", variant],
    queryFn: () => getGenres(variant),
  });

  const { data: items } = useQuery({
    queryKey: queryKey,
    queryFn: () => getItems(url),
  });

  return (
    <CardsSlider>
      {items?.results.map((item) => (
        <Carousel.Slide key={item.id}>
          <Link to={`/${variant}/${item.id}`}>
            <ItemCard
              title={(isMovie(item) ? item.title : item.name) ?? ""}
              posterPath={`${POSTER_PATH}/${item.poster_path}` ?? ""}
              genres={filterGenres(genres, item.genre_ids)}
              voteAverage={item.vote_average ?? 0}
            />
          </Link>
        </Carousel.Slide>
      ))}
    </CardsSlider>
  );
};
