import { BackButton, ErrorBoundary } from "@components";
import { FavoriteShows } from "@modules/FavoriteShows";
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
          <FavoriteShows />
        </ErrorBoundary>
      </ContentBox>
    </AppContainer>
  );
};

export default FavoriteMoviesPage;
