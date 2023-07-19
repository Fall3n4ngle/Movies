import { Card, Group, Skeleton, createStyles, rem } from "@mantine/core";
import { AiFillStar } from "react-icons/ai";

const useStyles = createStyles(() => ({
  card: {
    height: rem(330),
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
}));

export const ItemCardSkeleton = () => {
  const { classes } = useStyles();

  return (
    <Card className={classes.card} shadow="md" p="sm" radius="md">
      <Skeleton height={25} width="75%" radius="lg" mb="sm" />
      <Group w="100%" spacing="xs" mb="sm">
        <Skeleton height={12} width="25%" radius="lg" />
        <Skeleton height={12} width="25%" radius="lg" />
        <Skeleton height={12} width="25%" radius="lg" />
      </Group>
      <Group w="100%" spacing="xs">
        <Skeleton height={15} width="15%" radius="lg" />
        <AiFillStar />
      </Group>
    </Card>
  );
};
