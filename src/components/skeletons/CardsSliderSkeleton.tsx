import { Carousel } from "@mantine/carousel";

import { CardsSlider } from "../CardsSlider";

import { ItemCardSkeleton } from "./ItemCardSkeleton";

export const CardsSliderSkeleton = () => {
  return (
    <>
      <CardsSlider>
        {[...Array(5).keys()].map((item) => (
          <Carousel.Slide key={item}>
            <ItemCardSkeleton />
          </Carousel.Slide>
        ))}
      </CardsSlider>
    </>
  );
};
