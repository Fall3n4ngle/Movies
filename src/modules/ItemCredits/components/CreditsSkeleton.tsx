import { Group, Skeleton } from "@mantine/core";
import { CardsSlider } from "@components";
import { Carousel } from "@mantine/carousel";

import { PersonCardSkeleton } from "./PersonCardSkeleton";

export const CreditsSkeleton = () => {
  return (
    <>
      <Group>
        <Skeleton height={15} width={75} />
        <Skeleton height={15} width={75} />
      </Group>
      <CardsSlider>
        {[...Array(5).keys()].map((item) => (
          <Carousel.Slide key={item}>
            <PersonCardSkeleton />
          </Carousel.Slide>
        ))}
      </CardsSlider>
    </>
  );
};
