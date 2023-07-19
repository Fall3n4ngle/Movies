import { Card, Flex, Skeleton } from "@mantine/core";

export const PersonCardSkeleton = () => {
  return (
    <Card shadow="sm" padding="sm" radius="md">
      <Card.Section>
        <Skeleton height={270} />
      </Card.Section>
      <Card.Section p="sm">
        <Flex direction="column" align="center" gap="sm" justify="center">
          <Skeleton height={20} width={90} />
          <Skeleton height={15} width={80} />
        </Flex>
      </Card.Section>
    </Card>
  );
};
