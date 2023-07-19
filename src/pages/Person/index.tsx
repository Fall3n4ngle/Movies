import { Navigate, useParams } from "react-router-dom";
import { ItemGallery } from "@modules/ItemGallery";
import { BackButton } from "@components";
import { Box } from "@mantine/core";

import { AppContainer } from "../../layout/AppContainer";
import { ContentBox } from "../../layout/ContentBox";

import { WithBoundaryAndSuspense as PersonCredits } from "./components/PersonCredits/WithBoundaryAndSuspense";
import { WithBoundaryAndSuspense as PersonDescription } from "./components/PersonDescription/WithBoundaryAndSuspense";

const PersonPage = () => {
  const { id } = useParams();

  if (!id) {
    return <Navigate to="/" />;
  }

  return (
    <AppContainer>
      <ContentBox>
        <Box>
          <BackButton />
        </Box>
        <PersonDescription personId={id} />
        <ItemGallery
          itemId={id}
          variant="person"
          errorMsg="Error loading images"
          title="Person images"
        />
        <PersonCredits personId={id} />
      </ContentBox>
    </AppContainer>
  );
};

export default PersonPage;
