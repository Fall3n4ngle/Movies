import { Button, Group, Text } from "@mantine/core";
import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import { FC, PropsWithChildren } from "react";
import { ErrorBoundary as Boundary } from "react-error-boundary";

interface Props extends PropsWithChildren {
  message?: string;
}

export const ErrorBoundary: FC<Props> = ({ children, message }) => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <Boundary
      onReset={reset}
      fallbackRender={({ resetErrorBoundary }) => (
        <Group>
          <Text>{message ?? "There was an error"}</Text>
          <Button onClick={() => resetErrorBoundary()}>Try again</Button>
        </Group>
      )}
    >
      {children}
    </Boundary>
  );
};
