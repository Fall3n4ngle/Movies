import { Outlet } from "react-router-dom";
import { Box } from "@mantine/core";
import { AppNavbar } from "@modules/Navbar";

import { ScrollToTop } from "./ScrollToTop";

export const AppLayout = () => {
  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <AppNavbar />
        <Box
          sx={{
            flexGrow: 1,
          }}
        >
          <Outlet />
        </Box>
      </Box>
      <ScrollToTop />
    </>
  );
};
