import { Box, Group, Skeleton, createStyles } from "@mantine/core";

const useStyles = createStyles(() => ({
  poster: {
    height: 500,
    maxWidth: 350,
    minWidth: 280,
    width: "100%",
  },
  infoWrapper: {
    maxWidth: "100%",
    width: "100%",

    "@media screen and (min-width: 800px)": {
      maxWidth: "50%",
    },
  },
}));

export const ItemDescriptionSkeleton = () => {
  const { classes } = useStyles();

  return (
    <>
      <Group spacing="lg" align="center">
        <Skeleton className={classes.poster} radius="md" />
        <Box className={classes.infoWrapper}>
          <Skeleton width="65%" height="1.8em" mb="sm" radius="md" />
          <Skeleton width="35%" height="0.8em" mb="xl" radius="md" />
          <Skeleton width="13%" height="2.2em" mb="md" radius="md" />
          <Skeleton width="25%" height="1.3em" mb="md" radius="md" />

          <Skeleton width="75%" height="0.8em" mb="sm" radius="md" />
          <Skeleton width="75%" height="0.8em" mb="sm" radius="md" />
          <Skeleton width="75%" height="0.8em" mb="sm" radius="md" />
          <Skeleton width="75%" height="0.8em" mb="sm" radius="md" />
          <Skeleton width="75%" height="0.8em" mb="sm" radius="md" />
          <Skeleton width="75%" height="0.8em" mb="sm" radius="md" />
          <Skeleton width="75%" height="0.8em" mb="sm" radius="md" />
        </Box>
      </Group>
      <Skeleton width="20%" height="1.3em" radius="md" ta="center" />
      <Skeleton width="100%" height="0.8em" radius="md" />
      <Skeleton width="100%" height="0.8em" radius="md" />
      <Skeleton width="100%" height="0.8em" radius="md" />
    </>
  );
};
