import { ShowsWatchlist } from "@modules/ShowsWatchlist";
import { BackButton, ErrorBoundary } from "@components";
import { Box } from "@mantine/core";

import { AppContainer } from "../../layout/AppContainer";
import { ContentBox } from "../../layout/ContentBox";

const ShowsWatchlistPage = () => {
  return (
    <AppContainer>
      <ContentBox>
        <Box>
          <BackButton />
        </Box>
        <ErrorBoundary message="Error loading shows watchlist">
          <ShowsWatchlist />
        </ErrorBoundary>
      </ContentBox>
    </AppContainer>
  );
};

export default ShowsWatchlistPage;
