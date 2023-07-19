import { Suspense } from "react";
import { Box, Loader, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { RouterProvider } from "react-router-dom";

import { router } from "./router";

import "./styles/global.css";

const PageLoader = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Loader size="md" />
    </Box>
  );
};

export const App = () => {
  return (
    <MantineProvider withNormalizeCSS withGlobalStyles theme={{ colorScheme: "dark" }}>
      <Notifications />
      <Suspense fallback={<PageLoader />}>
        <RouterProvider router={router} />
      </Suspense>
    </MantineProvider>
  );
};
