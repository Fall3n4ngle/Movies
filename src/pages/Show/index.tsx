import { Navigate, useParams } from "react-router-dom";
import { ItemGallery } from "@modules/ItemGallery";
import { ItemsSlider } from "@modules/ItemsSlider";
import { ItemReviews } from "@modules/ItemReviews";
import { ItemCredits } from "@modules/ItemCredits";
import { ItemControls } from "@modules/ItemControls";
import { Group } from "@mantine/core";
import { useAuthContext } from "@app/providers/AuthProvider";
import { BackButton } from "@components";

import { AppContainer } from "../../layout/AppContainer";
import { ContentBox } from "../../layout/ContentBox";

import { WithBoundaryAndSuspense as ShowDescription } from "./components/Description/WithBoundaryAndSuspense";

const ShowPage = () => {
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
          {auth.accessToken && <ItemControls itemId={+id} variant="tv" />}
        </Group>
        <ShowDescription tvId={id} />
        <ItemCredits itemId={id} variant="tv" />
        <ItemGallery itemId={id} variant="tv" title="Show images" />
        <ItemsSlider
          title="Similar Shows"
          queryKey={["tv", id, "similar"]}
          variant="tv"
          errorMsg="Error loading similar shows"
          url={`/3/tv/${id}/similar`}
        />
        <ItemReviews itemId={id} variant="tv" />
      </ContentBox>
    </AppContainer>
  );
};

export default ShowPage;
