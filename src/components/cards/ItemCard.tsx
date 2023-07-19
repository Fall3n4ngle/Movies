import { Box, Group, Paper, Text, Title, createStyles, rem } from "@mantine/core";
import { AiFillStar } from "react-icons/ai";

import { FC } from "react";

import { IGenre } from "../../models/Genre";

interface Props {
  title: string;
  voteAverage: number;
  genres: IGenre[];
  posterPath: string;
}

const useStyles = createStyles(() => ({
  card: {
    height: rem(330),
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    "&:hover": {
      "& img": {
        transform: "scale(1.1)",
      },
    },
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "all 0.2s linear",
  },
  darken: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 1,
    background: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%)",
  },
}));

export const ItemCard: FC<Props> = ({ title, voteAverage, genres, posterPath }) => {
  const { classes } = useStyles();

  return (
    <Paper shadow="md" p="sm" radius="md" className={classes.card}>
      <img src={posterPath} alt={`${title} poster`} className={classes.image} />
      <Box className={classes.darken} />
      <Box
        sx={{
          zIndex: 2,
        }}
      >
        <Title order={3}>{title}</Title>
        <Group spacing="xs">
          {genres.map((genre) => (
            <Text key={genre.id} fs="italic" fz="sm">
              {genre.name}
            </Text>
          ))}
        </Group>
        <Group spacing="xs">
          <Text>{voteAverage.toFixed(0)}</Text>
          <AiFillStar color="gold" />
        </Group>
      </Box>
    </Paper>
  );
};
