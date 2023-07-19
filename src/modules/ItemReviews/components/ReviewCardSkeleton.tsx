import { Card, Group, Skeleton } from "@mantine/core";

export const ReviewCardSkeleton = () => {
  return (
    <Card radius="lg" p="md">
      <Group align="end">
        <Skeleton radius="50%" height={50} width={50} />
        <Skeleton radius="lg" height={25} width={140} />
        <Skeleton radius="lg" height={20} width={120} />
      </Group>
      <Group mt="md">
        <Skeleton radius="lg" height={15} width="100%" />
        <Skeleton radius="lg" height={15} width="100%" />
        <Skeleton radius="lg" height={15} width="100%" />
      </Group>
    </Card>
  );
};
