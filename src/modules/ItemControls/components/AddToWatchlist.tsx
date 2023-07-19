import { FC } from "react";
import { MdOutlineBookmarkAdd, MdOutlineErrorOutline } from "react-icons/md";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { notifications } from "@mantine/notifications";
import { AiOutlineCheck } from "react-icons/ai";

import { addToWatchlist } from "../api/addToWatchlist";
import { IAddToWatchlistRequest } from "../models/AddToWatchlistRequest";

import { ControlsItem } from "./ControlsItem";

export const AddToWatchlist: FC<IAddToWatchlistRequest> = (props) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (data: IAddToWatchlistRequest) => addToWatchlist(data),

    onMutate: () => {
      notifications.show({
        message: props.watchlist ? "Removing from watchlist" : "Adding to watchlist",
        loading: true,
        id: "Add to watchlist feedback",
        autoClose: 1500,
      });
    },

    onSuccess: () => {
      queryClient.invalidateQueries([props.media_type, "watchlist"]);

      queryClient
        .invalidateQueries([props.media_type, props.media_id, "account_states"])
        .then(() => {
          notifications.update({
            id: "Add to watchlist feedback",
            message: props.watchlist
              ? "Successfully removed from watchlist"
              : "Successfully Added to watchlist",
            icon: <AiOutlineCheck />,
            color: "teal",
          });
        });
    },

    onError: () => {
      notifications.update({
        id: "Add to watchlist feedback",
        message: props.watchlist ? "Error removing from watchlist" : "Error adding to watchlist",
        color: "red",
        icon: <MdOutlineErrorOutline />,
      });
    },
  });

  return (
    <ControlsItem
      icon={<MdOutlineBookmarkAdd />}
      label={props.watchlist ? "Remove from watchlist" : "Add to watchlist"}
      onClick={() => mutate({ ...props, watchlist: !props.watchlist })}
      isActive={props.watchlist}
    />
  );
};
