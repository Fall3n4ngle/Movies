import { Group, Skeleton } from "@mantine/core";

const ControlsItemSkeleton = () => {
  return <Skeleton radius="lg" width="2.6em" height="2.6em" />;
};

export const ItemControlsSkeleton = () => {
  return (
    <Group spacing="xs">
      {[...Array(3).keys()].map((item) => (
        <ControlsItemSkeleton key={item} />
      ))}
    </Group>
  );
};
