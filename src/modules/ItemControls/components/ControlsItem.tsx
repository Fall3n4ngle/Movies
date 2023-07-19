import { ActionIcon, Tooltip } from "@mantine/core";
import { FC, MouseEventHandler, ReactElement, cloneElement } from "react";

export interface ControlsItemProps {
  icon: ReactElement;
  onClick: MouseEventHandler;
  label: string;
  isActive?: boolean;
}

export const ControlsItem: FC<ControlsItemProps> = ({ icon, label, onClick, isActive }) => {
  return (
    <Tooltip label={label} position="bottom" withArrow>
      <ActionIcon onClick={onClick} size="xl" variant={isActive ? "filled" : "subtle"} radius="lg">
        {cloneElement(icon, {
          ...icon.props,
          size: "1.3rem",
        })}
      </ActionIcon>
    </Tooltip>
  );
};
