import { FC } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Box, Button, Group, Modal, Table, Text, Title } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { POSTER_PATH } from "@shared/const/env";
import { AiFillStar } from "react-icons/ai";
import ReactPlayer from "react-player";
import { ItemDescription } from "@components";
import { IVideo } from "@models";
import { modalWithoutBackgroundStyles } from "@shared/styles/ModalWithoutBackground";
import { useItemTitleStyles } from "@shared/styles/ItemTitle";

import { getMovieById } from "../../api/getMovieById";
import { getMovieVideos } from "../../api/getMovieVideos";

export interface MovieDescriptionProps {
  movieId: string;
}

export const MovieDescription: FC<MovieDescriptionProps> = ({ movieId }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const { classes } = useItemTitleStyles();

  const { data: movieDetails } = useQuery({
    queryKey: ["movie", movieId, "details"],
    queryFn: () => getMovieById(movieId),
  });

  const { data: trailer } = useQuery({
    queryKey: ["movie", movieId, "trailer"],
    queryFn: () => getMovieVideos(movieId),
    select: (data) => {
      if (!data.results) {
        return null;
      }

      const foundedTrailer = data.results.find((video) => video.type === "trailer");

      if (!foundedTrailer) {
        return data.results[0];
      }

      return foundedTrailer;
    },
  });

  const getTrailerUrl = (video: IVideo) => {
    let url = "";

    if (video.site === "YouTube") {
      url = `https://www.youtube.com/embed/${video.key}`;
    }

    if (video.site === "vimeo") {
      url = `https://player.vimeo.com/video/${video.key}`;
    }

    return url;
  };

  const description = (
    <>
      <Title order={2} className={classes.title} mb="sm">
        {movieDetails?.title}
      </Title>
      <Text size="sm" mb="sm">
        {movieDetails?.original_title}
      </Text>
      {trailer?.key && (
        <Button mb="md" onClick={open}>
          Trailer
        </Button>
      )}
      <Title order={3} mb="sm" className={classes.subTitle}>
        About movie
      </Title>
      <Table fontSize="md">
        <tbody>
          <tr>
            <td style={{ border: "none" }}>Genres:</td>
            <td>
              <Group>
                {movieDetails?.genres?.map((genre) => (
                  <Text key={genre.id}>{genre.name}</Text>
                ))}
              </Group>
            </td>
          </tr>
          <tr>
            <td>Release date:</td>
            <td>{movieDetails?.release_date ?? "No data"}</td>
          </tr>
          <tr>
            <td>Budget:</td>
            <td>{movieDetails?.budget + "$" ?? "No data"}</td>
          </tr>
          <tr>
            <td>Revenue:</td>
            <td>{movieDetails?.revenue + "$" ?? "No data"}</td>
          </tr>
          <tr>
            <td>Original language:</td>
            <td>{movieDetails?.original_language ?? "No data"}</td>
          </tr>
          <tr>
            <td>Runtime:</td>
            <td>{movieDetails?.runtime + " min" ?? "No data"}</td>
          </tr>
          <tr>
            <td>Vote average:</td>
            <td>
              {movieDetails?.vote_average ? (
                <Group>
                  <Text>{movieDetails.vote_average}</Text>
                  <AiFillStar />
                </Group>
              ) : (
                "No data"
              )}
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );

  return (
    <Box>
      <ItemDescription
        posterPath={`${POSTER_PATH}/${movieDetails?.poster_path}`}
        posterAlt={`${movieDetails?.title} poster`}
        overview={movieDetails?.overview ?? "No overview yet"}
        description={description}
      />
      {trailer?.key && (
        <Modal
          opened={opened}
          onClose={close}
          centered
          size="auto"
          styles={modalWithoutBackgroundStyles}
        >
          <ReactPlayer url={getTrailerUrl(trailer)} controls />
        </Modal>
      )}
    </Box>
  );
};
