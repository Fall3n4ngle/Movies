import { Flex, Group, Title, createStyles } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

import { AppContainer } from "../../../layout/AppContainer";

import { AutoComplete } from "./AutoComplete";
import { Links } from "./Links";
import { Buttons } from "./Buttons";

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: "1.3rem",

    [theme.fn.largerThan("sm")]: {
      fontSize: "1.5rem",
    },
  },
}));

export const AppNavbar = () => {
  const isBiggerThan725px = useMediaQuery("(min-width: 725px)");
  const [isAutoCompleteActive, setIsAutoCompleteActive] = useState(false);

  const { classes } = useStyles();

  const toggleAutoComplete = () => {
    setIsAutoCompleteActive((prev) => !prev);
  };

  return (
    <AppContainer>
      {isAutoCompleteActive ? (
        <Flex justify="center" align="center" sx={{ padding: "0.5em 0" }} gap="xs">
          <AutoComplete />
          <AiOutlineClose onClick={toggleAutoComplete} />
        </Flex>
      ) : (
        <Flex justify="space-between" align="center" sx={{ padding: "0.5em 0" }}>
          <Group spacing="0.2em" align="center">
            <Links />
            <Link to="/">
              <Title order={1} className={classes.title}>
                MOVIES
              </Title>
            </Link>
          </Group>
          {isBiggerThan725px && <AutoComplete />}
          <Buttons onSearchClick={toggleAutoComplete} />
        </Flex>
      )}
    </AppContainer>
  );
};
