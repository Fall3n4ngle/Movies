import { useQuery } from "@tanstack/react-query";
import { Carousel } from "@mantine/carousel";
import { POSTER_PATH } from "@shared/const/env";

import { getNowPlayingMovies } from "../api/getNowPlayingMovies";

import { HeroSlide } from "./HeroSlide";

export const HeroSlider = () => {
  const { data } = useQuery({
    queryKey: ["movies", "now_playing"],
    queryFn: getNowPlayingMovies,
  });

  return (
    <Carousel height="80vh" align="center" slidesToScroll={1} loop>
      {data?.results.map((result) => (
        <Carousel.Slide key={result.id}>
          <HeroSlide
            title={result.title ?? ""}
            image={`${POSTER_PATH}/${result.poster_path}`}
            overview={result.overview ?? ""}
            link={`/movie/${result.id}`}
          />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};
