import { useDebounce } from "@shared/hooks/useDebounce";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

import { Autocomplete, Box, Loader } from "@mantine/core";

import { getSearchResults } from "../api/getSearchResults";
import { mapResult } from "../utils/mapResult";

import { ResultCard } from "./ResultCard";

export const AutoComplete = () => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query);

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["search", debouncedQuery],
    queryFn: () =>
      getSearchResults({
        query: debouncedQuery,
      }),
    enabled: !!debouncedQuery,
    onSuccess: (result) => {
      return result.results.slice(0, 5);
    },
    suspense: false,
  });

  return (
    <Box
      sx={{
        maxWidth: 400,
        width: "100%",
      }}
    >
      <Autocomplete
        data={data?.results.map(mapResult) ?? []}
        placeholder="Search..."
        value={query}
        onChange={setQuery}
        itemComponent={ResultCard}
        filter={() => true}
        icon={<BsSearch />}
        aria-label="Search"
        rightSection={isLoading && isFetching ? <Loader size="xs" /> : null}
        nothingFound="Nothing found"
        styles={{
          itemsWrapper: {
            padding: "1em 0",
            display: "flex",
            flexDirection: "column",
            gap: "1.7em",
          },
        }}
      />
    </Box>
  );
};
