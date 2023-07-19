import { MovieWatchlist } from "@modules/MovieWatchlist";
import { BackButton, ErrorBoundary } from "@components";
import { Box } from "@mantine/core";

import { AppContainer } from "../../layout/AppContainer";
import { ContentBox } from "../../layout/ContentBox";

const MovieWatchlistPage = () => {
  return (
    <AppContainer>
      <ContentBox>
        <Box>
          <BackButton />
        </Box>
        <ErrorBoundary message="Error loading movie watchlist">
          <MovieWatchlist />
        </ErrorBoundary>
      </ContentBox>
    </AppContainer>
  );
};

export default MovieWatchlistPage;
