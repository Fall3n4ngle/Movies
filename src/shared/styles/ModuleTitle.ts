import { createStyles } from "@mantine/core";

export const useModuleTitleStyles = createStyles((theme) => ({
  title: {
    fontSize: "1.5rem",
    textAlign: "center",

    [theme.fn.largerThan("sm")]: {
      fontSize: "1.7rem",
      textAlign: "left",
    },
  },
}));
