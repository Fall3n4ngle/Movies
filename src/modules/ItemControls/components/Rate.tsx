import { FC, useState } from "react";
import { AiFillStar, AiOutlineCheck } from "react-icons/ai";
import { CloseButton, Group, Rating, Tooltip } from "@mantine/core";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { notifications } from "@mantine/notifications";
import { MdOutlineErrorOutline } from "react-icons/md";

import { IRateItemRequest, rate } from "../api/rate";
import { IDeleteRatingRequest, deleteRating } from "../api/deleteRating";

import { ControlsItemWithPopover } from "./ControlsItemWithPopover";

interface Props {
  media_id: number;
  media_type: "movie" | "tv";
  isRated: boolean;
  ratingValue?: number;
}

export const Rate: FC<Props> = ({ media_id, media_type, isRated, ratingValue = 0 }) => {
  const [rating, setRating] = useState(ratingValue);
  const queryClient = useQueryClient();

  const { mutate: addRating } = useMutation({
    mutationFn: (data: IRateItemRequest) => rate(data),

    onMutate: () => {
      notifications.show({
        message: "Adding your rating...",
        loading: true,
        id: "Add rating feedback",
        autoClose: 1500,
      });
    },

    onSuccess: () => {
      queryClient.invalidateQueries([media_type, "rated"]);
      queryClient.invalidateQueries([media_type, media_id, "account_states"]).then(() => {
        notifications.update({
          id: "Add rating feedback",
          message: "Rated successfully",
          icon: <AiOutlineCheck />,
          color: "teal",
        });
      });
    },

    onError: () => {
      notifications.update({
        id: "Add rating feedback",
        message: "Error adding rating",
        color: "red",
        icon: <MdOutlineErrorOutline />,
      });
    },
  });

  const { mutate: removeRating } = useMutation({
    mutationFn: (data: IDeleteRatingRequest) => deleteRating(data),

    onMutate: () => {
      notifications.show({
        message: "Deleting your rating...",
        loading: true,
        id: "Delete rating feedback",
        autoClose: 1500,
      });
    },

    onSuccess: () => {
      queryClient.invalidateQueries([media_type, "rated"]);
      queryClient.invalidateQueries([media_type, media_id, "account_states"]).then(() => {
        notifications.update({
          id: "Delete rating feedback",
          message: "Deleted successfully",
          icon: <AiOutlineCheck />,
          color: "teal",
        });
      });
    },

    onError: () => {
      notifications.update({
        id: "Delete rating feedback",
        message: "Error deleting rating",
        color: "red",
        icon: <MdOutlineErrorOutline />,
      });
    },
  });

  const handleChange = (newValue: number) => {
    const copy = newValue;
    setRating(copy);
    addRating({ media_id, media_type, value: copy });
  };

  const handleClick = () => {
    removeRating({ media_id, media_type });
    setRating(0);
  };

  return (
    <ControlsItemWithPopover icon={<AiFillStar />} label="Rate" isActive={isRated}>
      <Group>
        <Rating fractions={4} value={rating} onChange={handleChange} />
        {isRated && (
          <Tooltip label="Delete rating" position="bottom" withArrow>
            <CloseButton onClick={handleClick} />
          </Tooltip>
        )}
      </Group>
    </ControlsItemWithPopover>
  );
};
