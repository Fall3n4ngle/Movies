import { ErrorBoundary } from "@components";
import { Shows } from "@modules/Shows";

import { AppContainer } from "../../layout/AppContainer";

const ShowsPage = () => {
  return (
    <AppContainer>
      <ErrorBoundary message="Error loading movies">
        <Shows />
      </ErrorBoundary>
    </AppContainer>
  );
};

export default ShowsPage;
