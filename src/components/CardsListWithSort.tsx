import { sortOptions } from "@shared/const/sortOptions";
import { Box, Group, Select, Title } from "@mantine/core";
import { IMovie, IShow, SortBy } from "@models";
import { FC } from "react";

import { useModuleTitleStyles } from "@shared/styles/ModuleTitle";

import { CardsList } from "./CardsList";

interface Props {
  page: number;
  // eslint-disable-next-line no-unused-vars
  onPageChange(page: number): void;
  sortBy: SortBy;
  // eslint-disable-next-line no-unused-vars
  onChangeSortBy(sortBy: SortBy): void;
  data: (IMovie | IShow)[];
  nothingFoundMessage: string;
  genresType: "movie" | "tv";
  title: string;
  isFetching: boolean;
  totalPages: number;
}

export const CardsListWithSort: FC<Props> = ({
  data,
  nothingFoundMessage,
  genresType,
  sortBy,
  onChangeSortBy,
  isFetching,
  totalPages,
  page,
  onPageChange,
  title,
}) => {
  const { classes } = useModuleTitleStyles();

  return (
    <Box>
      <Group position="apart" mb="xl">
        <Title order={2} className={classes.title}>
          {title}
        </Title>
        <Select data={sortOptions} value={sortBy} onChange={onChangeSortBy} />
      </Group>
      <CardsList
        data={data}
        genresType={genresType}
        nothingFoundMessage={nothingFoundMessage}
        onPageChange={onPageChange}
        page={page}
        totalPages={totalPages}
        isFetching={isFetching}
      />
    </Box>
  );
};
