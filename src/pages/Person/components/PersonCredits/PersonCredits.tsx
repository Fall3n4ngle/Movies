import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { Tabs, Text } from "@mantine/core";
import { CardsWrapper, ItemCard } from "@components";
import { POSTER_PATH } from "@shared/const/env";
import { getGenres } from "@shared/api/getGenres";
import { filterGenres } from "@shared/utils/filterGenres";
import { Link } from "react-router-dom";

import { getPersonCredits } from "../../api/getPersonCredits";
import { transformResponse } from "../../utils/transformResponse";
import { IPersonCast, IPersonCrew } from "../../models/PersonCredits";

export interface PersonCreditsProps {
  personId: string;
}

export const PersonCredits: FC<PersonCreditsProps> = ({ personId }) => {
  const { data: credits } = useQuery({
    queryKey: ["person", personId, "credits"],
    queryFn: () => getPersonCredits(personId),
    onSuccess: (response) => transformResponse(response),
  });

  const { data: movieGenres } = useQuery({
    queryKey: ["genres", "movie"],
    queryFn: () => getGenres("movie"),
  });

  const { data: showGenres } = useQuery({
    queryKey: ["genres", "tv"],
    queryFn: () => getGenres("tv"),
  });

  const renderCredits = (items: (IPersonCast | IPersonCrew)[]) => {
    return (
      <CardsWrapper>
        {items.map((item, index) => (
          <Link to={`/${item.media_type}/${item.id}`} key={`${index}-${item.id}`}>
            <ItemCard
              genres={filterGenres(
                item.media_type === "movie" ? movieGenres : showGenres,
                item.genre_ids
              )}
              posterPath={`${POSTER_PATH}/${item.poster_path}`}
              title={item.title ?? item.name ?? ""}
              voteAverage={item.vote_average ?? 0}
            />
          </Link>
        ))}
      </CardsWrapper>
    );
  };

  const renderCast = () => {
    if (!credits?.cast) {
      return <Text>No roles found</Text>;
    }

    return renderCredits(credits.cast);
  };

  const renderCrew = () => {
    if (!credits?.crew) {
      return <Text>No occupations found</Text>;
    }

    return renderCredits(credits.crew);
  };

  return (
    <>
      <Tabs defaultValue="cast" keepMounted={false}>
        <Tabs.List mb="lg">
          <Tabs.Tab value="cast">Cast</Tabs.Tab>
          <Tabs.Tab value="crew">Crew</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="cast">{renderCast()}</Tabs.Panel>
        <Tabs.Panel value="crew">{renderCrew()}</Tabs.Panel>
      </Tabs>
    </>
  );
};
