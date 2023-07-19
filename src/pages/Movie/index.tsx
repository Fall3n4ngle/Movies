import { Navigate, useParams } from "react-router-dom";
import { ItemGallery } from "@modules/ItemGallery";
import { ItemsSlider } from "@modules/ItemsSlider";
import { ItemReviews } from "@modules/ItemReviews";
import { ItemCredits } from "@modules/ItemCredits";
import { useAuthContext } from "@app/providers/AuthProvider";
import { Group } from "@mantine/core";
import { ItemControls } from "@modules/ItemControls";
import { BackButton } from "@components";

import { AppContainer } from "../../layout/AppContainer";

import { ContentBox } from "../../layout/ContentBox";

import { WithBoundaryAndSuspense as MovieDescription } from "./components/Description/WithBoundaryAndSuspense";

const MoviePage = () => {
  const { id } = useParams();
  const { auth } = useAuthContext();

  if (!id) {
    return <Navigate to="/" />;
  }

  return (
    <AppContainer>
      <ContentBox>
        <Group position="apart">
          <BackButton />
          {auth.accessToken && <ItemControls itemId={+id} variant="movie" />}
        </Group>
        <MovieDescription movieId={id} />
        <ItemCredits itemId={id} variant="movie" />
        <ItemGallery itemId={id} variant="movie" title="Movie images" />
        <ItemsSlider
          title="Similar Movies"
          queryKey={["movie", id, "similar"]}
          variant="movie"
          errorMsg="Error loading similar movies"
          url={`/3/movie/${id}/similar`}
        />
        <ItemReviews itemId={id} variant="movie" />
      </ContentBox>
    </AppContainer>
  );
};

export default MoviePage;
