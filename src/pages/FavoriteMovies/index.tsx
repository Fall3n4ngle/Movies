import { FavoriteMovies } from "@modules/FavoriteMovies";
import { BackButton, ErrorBoundary } from "@components";
import { Box } from "@mantine/core";

import { AppContainer } from "../../layout/AppContainer";
import { ContentBox } from "../../layout/ContentBox";

const FavoriteMoviesPage = () => {
  return (
    <AppContainer>
      <ContentBox>
        <Box>
          <BackButton />
        </Box>
        <ErrorBoundary message="Error loading favorite movies">
          <FavoriteMovies />
        </ErrorBoundary>
      </ContentBox>
    </AppContainer>
  );
};

export default FavoriteMoviesPage;
