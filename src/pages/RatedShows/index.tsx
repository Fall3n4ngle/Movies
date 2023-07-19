import { RatedShows } from "@modules/RatedShows";
import { BackButton, ErrorBoundary } from "@components";
import { Box } from "@mantine/core";

import { AppContainer } from "../../layout/AppContainer";
import { ContentBox } from "../../layout/ContentBox";

const RatedShowsPage = () => {
  return (
    <AppContainer>
      <ContentBox>
        <Box>
          <BackButton />
        </Box>
        <ErrorBoundary message="Error loading rated shows">
          <RatedShows />
        </ErrorBoundary>
      </ContentBox>
    </AppContainer>
  );
};

export default RatedShowsPage;
