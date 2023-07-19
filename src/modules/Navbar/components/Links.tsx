import { useState } from "react";
import { Burger, Menu, NavLink } from "@mantine/core";
import { useAuthContext } from "@app/providers/AuthProvider";
import { BsPersonCircle } from "react-icons/bs";

import { privateLinks, publicLinks } from "../const/links";

import { mapLinks } from "./../utils/mapLinks";

export const Links = () => {
  const { auth } = useAuthContext();
  const [isOpened, setIsOpened] = useState(false);

  return (
    <Menu shadow="md" width={230} opened={isOpened} onChange={setIsOpened}>
      <Menu.Target>
        <Burger opened={isOpened} />
      </Menu.Target>
      <Menu.Dropdown>
        {mapLinks(publicLinks)}
        {auth.accessToken && (
          <NavLink label="Account" icon={<BsPersonCircle />}>
            {mapLinks(privateLinks)}
          </NavLink>
        )}
      </Menu.Dropdown>
    </Menu>
  );
};
