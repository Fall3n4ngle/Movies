import { Flex } from "@mantine/core";
import { FC, PropsWithChildren } from "react";

export const ContentBox: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Flex direction="column" gap="lg" pt="xs" pb="xl">
      {children}
    </Flex>
  );
};
