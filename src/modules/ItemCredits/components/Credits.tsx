import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { Tabs } from "@mantine/core";
import { CardsSlider } from "@components";
import { POSTER_PATH } from "@shared/const/env";
import { Carousel } from "@mantine/carousel";
import { Link } from "react-router-dom";

import { getItemCredits } from "../api/getCredits";

import { PersonCard } from "./PersonCard";

export interface ItemCreditsProps {
  itemId: string;
  variant: "movie" | "tv";
}

export const ItemCredits: FC<ItemCreditsProps> = ({ itemId, variant }) => {
  const { data: credits } = useQuery({
    queryKey: [variant, itemId, "credits"],
    queryFn: () => getItemCredits(itemId, variant),
  });

  return (
    <Tabs defaultValue="cast">
      <Tabs.List mb="md">
        <Tabs.Tab value="cast">Cast</Tabs.Tab>
        <Tabs.Tab value="crew">Crew</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="cast">
        <CardsSlider>
          {credits?.cast?.map((cast) => (
            <Carousel.Slide key={cast.id}>
              <Link to={`/person/${cast.id}`}>
                <PersonCard
                  character={cast.character ?? "No data"}
                  image={`${POSTER_PATH}/${cast.profile_path}`}
                  name={cast.name ?? "No data"}
                />
              </Link>
            </Carousel.Slide>
          ))}
        </CardsSlider>
      </Tabs.Panel>
      <Tabs.Panel value="crew">
        <CardsSlider>
          {credits?.crew?.map((crew) => (
            <Carousel.Slide key={crew.id}>
              <Link to={`/person/${crew.id}`}>
                <PersonCard
                  character={crew.department ?? "No data"}
                  image={`${POSTER_PATH}/${crew.profile_path}`}
                  name={crew.name ?? "No data"}
                />
              </Link>
            </Carousel.Slide>
          ))}
        </CardsSlider>
      </Tabs.Panel>
    </Tabs>
  );
};
