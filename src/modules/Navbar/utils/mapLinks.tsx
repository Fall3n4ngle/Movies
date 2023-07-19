import { NavLink } from "react-router-dom";
import { NavLink as StyledLink } from "@mantine/core";

import { ILink } from "../models/Link";

export const mapLinks = (links: ILink[]) => {
  return links.map((link) => (
    <NavLink key={link.href} to={link.href}>
      {({ isActive }) => <StyledLink active={isActive} label={link.label} icon={link.icon} />}
    </NavLink>
  ));
};
