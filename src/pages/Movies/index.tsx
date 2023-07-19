import { Movies } from "@modules/Movies";
import { ErrorBoundary } from "@components";

import { AppContainer } from "../../layout/AppContainer";

const MoviesPage = () => {
  return (
    <AppContainer>
      <ErrorBoundary message="Error loading movies">
        <Movies />
      </ErrorBoundary>
    </AppContainer>
  );
};

export default MoviesPage;
