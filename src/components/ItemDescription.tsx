import { Box, Group, Image, Spoiler, Text, Title, createStyles } from "@mantine/core";
import { ReactNode, FC } from "react";

interface Props {
  posterPath: string;
  posterAlt: string;
  overview: string;
  description: ReactNode;
}

const useStyles = createStyles((theme) => ({
  poster: {
    maxWidth: 350,
    minWidth: 280,
  },
  description: {
    fontSize: "0.9rem",
    textAlign: "justify",

    [theme.fn.largerThan("sm")]: {
      fontSize: "1rem",
    },
  },
}));

export const ItemDescription: FC<Props> = ({ description, overview, posterAlt, posterPath }) => {
  const { classes } = useStyles();

  return (
    <>
      <Group align="center" spacing="xl" mb="xl">
        <Image src={posterPath} alt={posterAlt} className={classes.poster} radius="md" />
        <Box>{description}</Box>
      </Group>
      <Title order={2} align="center" mb="md">
        Overview
      </Title>
      <Spoiler maxHeight={220} hideLabel="Show less" showLabel="Show more">
        <Text className={classes.description}>{overview}</Text>
      </Spoiler>
    </>
  );
};
