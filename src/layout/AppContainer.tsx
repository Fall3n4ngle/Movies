import { Box } from "@mantine/core";
import { FC, PropsWithChildren } from "react";

export const AppContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box
      sx={{
        maxWidth: 1230,
        margin: "0 auto",
        padding: "0 15px",
        width: "100%",
      }}
    >
      {children}
    </Box>
  );
};
