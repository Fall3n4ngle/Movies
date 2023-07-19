import { createStyles } from "@mantine/core";

export const useItemTitleStyles = createStyles((theme) => ({
  title: {
    fontSize: "1.5rem",

    [theme.fn.largerThan("sm")]: {
      fontSize: "1.7rem",
      marginTop: 0,
    },

    [theme.fn.largerThan("md")]: {
      fontSize: "1.9rem",
    },
  },
  subTitle: {
    fontSize: "1.3rem",

    [theme.fn.largerThan("sm")]: {
      fontSize: "1.4rem",
      marginTop: 0,
    },

    [theme.fn.largerThan("md")]: {
      fontSize: "1.5rem",
    },
  },
}));
