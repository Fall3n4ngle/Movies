import { RatedMovies } from "@modules/RatedMovies";
import { BackButton, ErrorBoundary } from "@components";
import { Box } from "@mantine/core";

import { AppContainer } from "../../layout/AppContainer";
import { ContentBox } from "../../layout/ContentBox";

const RatedMoviesPage = () => {
  return (
    <AppContainer>
      <ContentBox>
        <Box>
          <BackButton />
        </Box>
        <ErrorBoundary message="Error loading rated movies">
          <RatedMovies />
        </ErrorBoundary>
      </ContentBox>
    </AppContainer>
  );
};

export default RatedMoviesPage;
