import { RecommendedShows } from "@modules/RecommendedShows";
import { Box } from "@mantine/core";
import { ErrorBoundary, BackButton } from "@components";

import { ContentBox } from "../../layout/ContentBox";
import { AppContainer } from "../../layout/AppContainer";

const RecommendedShowsPage = () => {
  return (
    <AppContainer>
      <ContentBox>
        <Box>
          <BackButton />
        </Box>
        <ErrorBoundary message="Error loading recommended shows">
          <RecommendedShows />
        </ErrorBoundary>
      </ContentBox>
    </AppContainer>
  );
};

export default RecommendedShowsPage;
