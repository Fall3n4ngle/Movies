import { PropsWithChildren, useState, cloneElement } from "react";
import { ActionIcon, Popover, Tooltip } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { ControlsItemProps } from "./ControlsItem";

export const ControlsItemWithPopover = ({
  icon,
  label,
  children,
  isActive,
}: Omit<ControlsItemProps, "onClick"> & PropsWithChildren) => {
  const [isPopoverOpened, setIsPopoverOpened] = useState(false);
  const [isTooltipOpened, { open, close }] = useDisclosure(false);

  return (
    <Popover opened={isPopoverOpened} onChange={setIsPopoverOpened}>
      <Popover.Target>
        <Tooltip
          label={label}
          position="bottom"
          opened={isTooltipOpened && !isPopoverOpened}
          withArrow
        >
          <ActionIcon
            onClick={() => setIsPopoverOpened((prev) => !prev)}
            size="xl"
            variant={isActive ? "filled" : "subtle"}
            radius="lg"
            onMouseEnter={open}
            onMouseLeave={close}
          >
            {cloneElement(icon, {
              ...icon.props,
              size: "1.3rem",
            })}
          </ActionIcon>
        </Tooltip>
      </Popover.Target>
      <Popover.Dropdown px="sm">{children}</Popover.Dropdown>
    </Popover>
  );
};
