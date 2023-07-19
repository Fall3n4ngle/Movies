import { SimpleGrid } from "@mantine/core";

import { ItemCardSkeleton } from "./ItemCardSkeleton";

export const CardsListSkeleton = () => {
  return (
    <SimpleGrid
      cols={1}
      breakpoints={[
        { minWidth: 480, cols: 2 },
        { minWidth: 720, cols: 3 },
        { minWidth: 960, cols: 4 },
        { minWidth: 1200, cols: 5 },
      ]}
    >
      {[...Array(5).keys()].map((item) => (
        <ItemCardSkeleton key={item} />
      ))}
    </SimpleGrid>
  );
};
