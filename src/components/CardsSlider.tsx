import { PropsWithChildren, FC } from "react";
import { Carousel } from "@mantine/carousel";

const cardsSliderBreakpoints = [
  { minWidth: "xs", slideSize: "50%", slideGap: "sm" },
  { minWidth: "sm", slideSize: "33.3333%", slideGap: "sm" },
  { minWidth: "md", slideSize: "25%", slideGap: "md" },
  { minWidth: "lg", slideSize: "20%", slideGap: "md" },
];

export const CardsSlider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Carousel loop slideSize="100%" breakpoints={cardsSliderBreakpoints} align="start">
        {children}
      </Carousel>
    </>
  );
};
