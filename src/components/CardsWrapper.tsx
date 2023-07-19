import { SimpleGrid } from "@mantine/core";
import { FC, PropsWithChildren } from "react";

const breakpoints = [
  { minWidth: 480, cols: 2 },
  { minWidth: 720, cols: 3 },
  { minWidth: 960, cols: 4 },
  { minWidth: 1200, cols: 5 },
];

export const CardsWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <SimpleGrid cols={1} breakpoints={breakpoints}>
      {children}
    </SimpleGrid>
  );
};
