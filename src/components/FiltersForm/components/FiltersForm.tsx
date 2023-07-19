import { sortOptions } from "@shared/const/sortOptions";
import { Box, Button, Flex, MultiSelect, RangeSlider, Select, Text } from "@mantine/core";
import { getGenres } from "@shared/api/getGenres";
import { useQuery } from "@tanstack/react-query";
import { FC, FormEvent, useState } from "react";
import { IFilters, SortBy } from "@models";

import { mapGenres } from "../utils/mapGenres";

interface Props {
  // eslint-disable-next-line no-unused-vars
  onSubmit: (filters: IFilters) => void;
  defaultFilters: Required<IFilters>;
  variant: "movie" | "tv";
}

const currentYear = new Date().getFullYear();

export const FiltersForm: FC<Props> = ({ onSubmit, defaultFilters, variant }) => {
  const [filters, setFilters] = useState(defaultFilters);

  const { data: genres } = useQuery({
    queryKey: ["genres", variant],
    queryFn: () => getGenres(variant),
    select: (data) => data.map(mapGenres),
  });

  const handleChange = <T extends keyof IFilters, R extends IFilters[T]>(name: T, value: R) => {
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(filters);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          maxWidth: 400,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <Select
          data={sortOptions}
          label="Sort by:"
          placeholder="Pick one"
          aria-label="Select sort by option"
          searchable
          nothingFound="Invalid sort option"
          name="sort_by"
          onChange={(value) => handleChange("sort_by", value as SortBy)}
          value={filters.sort_by}
        />
        <Flex direction="column" gap="sm">
          <Text>Vote average:</Text>
          <RangeSlider
            min={0}
            max={10}
            step={1}
            minRange={1}
            name="vote_average"
            onChangeEnd={(value) =>
              handleChange("vote_average", {
                gte: value[0],
                lte: value[1],
              })
            }
            value={[filters.vote_average.gte, filters.vote_average.lte]}
          />
        </Flex>
        <MultiSelect
          data={genres ?? []}
          label="Include genres:"
          placeholder="Select one or many"
          searchable
          nothingFound="Genre not found"
          name="with_genres"
          onChange={(value) => handleChange("with_genres", value.map(Number))}
          value={filters.with_genres.map(String)}
        />
        <MultiSelect
          data={genres ?? []}
          label="Exclude genres:"
          placeholder="Select one or many"
          searchable
          name="without_genres"
          nothingFound="Genre not found"
          onChange={(value) => handleChange("without_genres", value.map(Number))}
          value={filters.without_genres.map(String)}
        />
        <Flex direction="column" gap="sm">
          <Text>Release date:</Text>
          <RangeSlider
            min={1895}
            max={currentYear}
            minRange={1}
            name="release_date"
            onChangeEnd={(value) =>
              handleChange("release_date", {
                gte: value[0],
                lte: value[1],
              })
            }
            value={[filters.release_date.gte, filters.release_date.lte]}
          />
        </Flex>
        <Flex direction="column" gap="sm">
          <Text>Runtime (in minutes):</Text>
          <RangeSlider
            min={0}
            max={300}
            name="with_runtime"
            onChangeEnd={(value) =>
              handleChange("with_runtime", {
                gte: value[0],
                lte: value[1],
              })
            }
            value={[filters.with_runtime.gte, filters.with_runtime.lte]}
          />
        </Flex>
        <Button type="submit">Submit</Button>
      </Box>
    </form>
  );
};
