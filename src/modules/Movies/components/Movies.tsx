import { useState } from "react";
import { Button, Group, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useQuery } from "@tanstack/react-query";
import { BackButton, CardsList, FiltersForm } from "@components";
import { useFilters } from "@shared/hooks/useFilters";
import { GiSettingsKnobs } from "react-icons/gi";
import { IFilters } from "@models";

import { discoverMovies } from "../api/discoverMovies";
import { ContentBox } from "../../../layout/ContentBox";

export const Movies = () => {
  const { filters, setAllFilters } = useFilters("filters/movies");
  const [page, setPage] = useState(1);
  const [opened, { open, close }] = useDisclosure(false);

  const { data: movies, isFetching } = useQuery({
    queryKey: ["movie", "discover", page, filters],
    queryFn: () => discoverMovies({ page, filters }),
    suspense: false,
  });

  const handleSubmit = (f: IFilters) => {
    setAllFilters(f);
    close();
  };

  return (
    <>
      <ContentBox>
        <Group position="apart">
          <BackButton />
          <Button leftIcon={<GiSettingsKnobs />} onClick={open}>
            FIlters
          </Button>
        </Group>
        <CardsList
          data={movies?.results ?? []}
          genresType="movie"
          nothingFoundMessage="No movies found"
          onPageChange={setPage}
          page={page}
          totalPages={movies?.total_pages ?? 1}
          isFetching={isFetching}
        />
      </ContentBox>
      <Modal opened={opened} onClose={close}>
        <FiltersForm onSubmit={handleSubmit} defaultFilters={filters} variant="movie" />
      </Modal>
    </>
  );
};
