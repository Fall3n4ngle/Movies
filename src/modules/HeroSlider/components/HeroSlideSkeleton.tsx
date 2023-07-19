import { Box, Flex, Skeleton } from "@mantine/core";

import { AppContainer } from "../../../layout/AppContainer";

export const HeroSlideSkeleton = () => {
  return (
    <Box sx={{ height: "80vh" }}>
      <Flex
        direction="column"
        gap="1rem"
        justify="flex-end"
        sx={{ height: "100%", paddingBottom: "2rem" }}
      >
        <AppContainer>
          <Skeleton height={44} width={150} radius="lg" mb="md" />
          <Skeleton height={20} width="70%" radius="lg" mb="xs" />
          <Skeleton height={20} width="35%" radius="lg" mb="xs" />
          <Skeleton height={20} width="55%" radius="lg" mb="md" />
          <Skeleton height={34} width={80} radius="lg" />
        </AppContainer>
      </Flex>
    </Box>
  );
};
