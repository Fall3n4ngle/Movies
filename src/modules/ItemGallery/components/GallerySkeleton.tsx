import { Box, Skeleton, createStyles } from "@mantine/core";

const useStyles = createStyles(() => ({
  wrapper: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gridAutoFlow: "dense",
    gridAutoRows: "200px",
    gap: "10px",
  },
}));

export const GallerySkeleton = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.wrapper}>
      {[...Array(8)].map((_, index) => (
        <Skeleton key={index} />
      ))}
    </Box>
  );
};
