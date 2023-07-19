import { HeroSlider } from "@modules/HeroSlider";
import { ItemsSlider } from "@modules/ItemsSlider";
import { Flex } from "@mantine/core";

import { AppContainer } from "../../layout/AppContainer";

const HomePage = () => {
  return (
    <>
      <HeroSlider />
      <AppContainer>
        <Flex direction="column" gap="xl" pt="xl" pb="xl">
          <ItemsSlider
            variant="movie"
            title="Popular Movies"
            queryKey={["movie", "popular"]}
            url="/3/movie/popular"
            errorMsg="Error loading popular movies"
          />
          <ItemsSlider
            variant="movie"
            title="Upcoming Movies"
            queryKey={["movie", "upcoming"]}
            url="/3/movie/upcoming"
            errorMsg="Error loading upcoming movies"
          />
          <ItemsSlider
            variant="tv"
            title="Shows on Air"
            queryKey={["tv", "on_the_air"]}
            url="/3/tv/on_the_air"
            errorMsg="Error loading shows on air"
          />
          <ItemsSlider
            variant="tv"
            title="Popular Shows"
            queryKey={["tv", "popular"]}
            url="/3/tv/popular"
            errorMsg="Error loading popular shows"
          />
        </Flex>
      </AppContainer>
    </>
  );
};

export default HomePage;
