import { useAuthContext } from "@app/providers/AuthProvider";
import { ActionIcon, Button, Group, MediaQuery } from "@mantine/core";
import { BsSearch } from "react-icons/bs";
import { FC } from "react";

import { getRequestToken } from "../api/getRequestToken";
import { deleteAccessToken } from "../api/deleteAccessToken";

interface Props {
  onSearchClick: () => void;
}

export const Buttons: FC<Props> = ({ onSearchClick }) => {
  const { setAuth, auth } = useAuthContext();

  const login = async () => {
    const requestToken = await getRequestToken();
    if (requestToken) {
      setAuth((prev) => ({ ...prev, requestToken }));
    }
  };

  const logout = async () => {
    if (auth.accessToken) {
      await deleteAccessToken(auth.accessToken);
    }

    setAuth({
      accessToken: null,
      accountId: null,
      requestToken: null,
    });
  };

  return (
    <Group align="center" spacing="xs">
      <MediaQuery largerThan="725px" styles={{ display: "none" }}>
        <ActionIcon variant="subtle" onClick={onSearchClick}>
          <BsSearch />
        </ActionIcon>
      </MediaQuery>

      {auth.accessToken ? (
        <Button onClick={logout} variant="subtle">
          Logout
        </Button>
      ) : (
        <Button onClick={login} variant="subtle">
          Login
        </Button>
      )}
    </Group>
  );
};
