import { useDisclosure } from "@mantine/hooks";
import { useFilters } from "@shared/hooks/useFilters";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Button, Group, Modal } from "@mantine/core";
import { GiSettingsKnobs } from "react-icons/gi";
import { BackButton, CardsList, FiltersForm } from "@components";
import { IFilters } from "@models";

import { discoverShows } from "../api/discoverShows";
import { ContentBox } from "../../../layout/ContentBox";

export const Shows = () => {
  const { filters, setAllFilters } = useFilters("filters/shows");
  const [page, setPage] = useState(1);
  const [opened, { open, close }] = useDisclosure(false);

  const { data: shows, isFetching } = useQuery({
    queryKey: ["tv", "discover", page, filters],
    queryFn: () => discoverShows({ page, filters }),
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
          data={shows?.results ?? []}
          genresType="movie"
          nothingFoundMessage="No movies found"
          onPageChange={setPage}
          page={page}
          totalPages={shows?.total_pages ?? 1}
          isFetching={isFetching}
        />
      </ContentBox>
      <Modal opened={opened} onClose={close}>
        <FiltersForm onSubmit={handleSubmit} defaultFilters={filters} variant="tv" />
      </Modal>
    </>
  );
};
