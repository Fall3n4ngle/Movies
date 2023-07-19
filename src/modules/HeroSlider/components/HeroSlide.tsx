import { FC } from "react";
import { Link } from "react-router-dom";
import { BackgroundImage, Box, Title, Text, Button, createStyles } from "@mantine/core";

import { AppContainer } from "../../../layout/AppContainer";

interface Props {
  title?: string;
  overview?: string;
  image?: string;
  link: string;
}

const useStyles = createStyles((theme) => ({
  slide: {
    height: "100%",
    position: "relative",
  },
  image: {
    height: "100%",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    height: "100%",
    gap: "1rem",
    paddingBottom: "2rem",
    position: "relative",
    zIndex: 2,
  },
  darken: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 1,
    background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.8) 100%)",
  },
  title: {
    fontSize: "1.4rem",
    marginBottom: "1rem",

    [theme.fn.largerThan("sm")]: {
      fontSize: "1.8rem",
    },

    [theme.fn.largerThan("md")]: {
      fontSize: "2rem",
    },
  },
  description: {
    fontSize: "0.9rem",
    marginBottom: "1rem",

    [theme.fn.largerThan("sm")]: {
      fontSize: "1rem",
    },
  },
}));

export const HeroSlide: FC<Props> = ({ title, overview, image, link }) => {
  const { classes } = useStyles();

  const getDescription = (description = "") => {
    if (description.length < 400) return description;
    return description.slice(0, 400) + "...";
  };

  return (
    <Box className={classes.slide}>
      <Box className={classes.darken} />
      <BackgroundImage src={`${image}`} className={classes.image}>
        <Box className={classes.content}>
          <AppContainer>
            <Title className={classes.title}>{title}</Title>
            <Text className={classes.description}>{getDescription(overview)}</Text>
            <Link to={link}>
              <Button>View more</Button>
            </Link>
          </AppContainer>
        </Box>
      </BackgroundImage>
    </Box>
  );
};
