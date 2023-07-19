import { FC } from "react";
import { useDisclosure } from "@mantine/hooks";
import { useQuery } from "@tanstack/react-query";
import { IVideo } from "@models";
import { Button, Group, Modal, Table, Text, Title } from "@mantine/core";
import { AiFillStar } from "react-icons/ai";
import ReactPlayer from "react-player";
import { POSTER_PATH } from "@shared/const/env";
import { ItemDescription } from "@components";
import { useItemTitleStyles } from "@shared/styles/ItemTitle";
import { modalWithoutBackgroundStyles } from "@shared/styles/ModalWithoutBackground";

import { getShowById } from "../../api/getShowById";
import { getShowVideos } from "../../api/getShowVideos";

export interface TvDescriptionProps {
  tvId: string;
}

export const TvDescription: FC<TvDescriptionProps> = ({ tvId }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const { classes } = useItemTitleStyles();

  const { data: showDetails } = useQuery({
    queryKey: ["tv", tvId, "details"],
    queryFn: () => getShowById(tvId),
  });

  const { data: trailer } = useQuery({
    queryKey: ["movie", tvId, "trailer"],
    queryFn: () => getShowVideos(tvId),
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
      <Title order={2} size="h1" className={classes.title}>
        {showDetails?.name}
      </Title>
      <Text size="sm" mb="md">
        {showDetails?.original_name}
      </Text>
      {trailer?.key && (
        <Button mb="md" onClick={open}>
          Trailer
        </Button>
      )}
      <Title order={3} mb="sm" className={classes.subTitle}>
        About show
      </Title>
      <Table fontSize="md">
        <tbody>
          <tr>
            <td style={{ border: "none" }}>Genres:</td>
            <td>
              <Group>
                {showDetails?.genres?.map((genre) => (
                  <Text key={genre.id}>{genre.name}</Text>
                ))}
              </Group>
            </td>
          </tr>
          <tr>
            <td>Release date:</td>
            <td>{showDetails?.first_air_date ?? "No data"}</td>
          </tr>
          <tr>
            <td>Number of episodes:</td>
            <td>{showDetails?.number_of_episodes ?? "No data"}</td>
          </tr>
          <tr>
            <td>Number of seasons:</td>
            <td>{showDetails?.number_of_seasons ?? "No data"}</td>
          </tr>
          <tr>
            <td>Original language:</td>
            <td>{showDetails?.original_language ?? "No data"}</td>
          </tr>
          <tr>
            <td>Status:</td>
            <td>{showDetails?.status}</td>
          </tr>
          <tr>
            <td>Vote average:</td>
            <td>
              {showDetails?.vote_average ? (
                <Group>
                  <Text>{showDetails.vote_average}</Text>
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
    <>
      <ItemDescription
        posterPath={`${POSTER_PATH}/${showDetails?.poster_path}`}
        posterAlt={`${showDetails?.name} poster`}
        overview={showDetails?.overview ?? "No overview yet"}
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
    </>
  );
};
