import { BackButton, ErrorBoundary } from "@components";
import { RecommendedMovies } from "@modules/RecommendedMovies";
import { Box } from "@mantine/core";

import { AppContainer } from "../../layout/AppContainer";
import { ContentBox } from "../../layout/ContentBox";

const RecommendedMoviesPage = () => {
  return (
    <AppContainer>
      <ContentBox>
        <Box>
          <BackButton />
        </Box>
        <ErrorBoundary message="Error loading recommended movies">
          <RecommendedMovies />
        </ErrorBoundary>
      </ContentBox>
    </AppContainer>
  );
};

export default RecommendedMoviesPage;
