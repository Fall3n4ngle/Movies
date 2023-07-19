import { FC } from "react";
import { MdFavorite, MdOutlineErrorOutline } from "react-icons/md";
import { AiOutlineCheck } from "react-icons/ai";
import { notifications } from "@mantine/notifications";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { addToFavorites } from "../api/addToFavorites";
import { IAddToFavoritesRequest } from "../models/AddToFavoritesRequest";

import { ControlsItem } from "./ControlsItem";

export const AddToFavorites: FC<IAddToFavoritesRequest> = (props) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (data: IAddToFavoritesRequest) => addToFavorites(data),

    onMutate: () => {
      notifications.show({
        message: props.favorite ? "Removing from Favorites" : "Adding to Favorites",
        loading: true,
        id: "Add to favorites feedback",
        autoClose: 1500,
      });
    },

    onSuccess: () => {
      queryClient
        .invalidateQueries([props.media_type, props.media_id, "account_states"])
        .then(() => {
          notifications.update({
            id: "Add to favorites feedback",
            message: props.favorite
              ? "Successfully removed from favorites"
              : "Successfully Added to Favorites",
            icon: <AiOutlineCheck />,
            color: "teal",
          });
        });
    },

    onError: () => {
      notifications.update({
        id: "Add to favorites feedback",
        message: props.favorite ? "Error removing from favorites" : "Error adding to favorites",
        color: "red",
        icon: <MdOutlineErrorOutline />,
      });
    },
  });

  return (
    <ControlsItem
      icon={<MdFavorite />}
      label={props.favorite ? "Remove from favorites" : "Add to favorites"}
      onClick={() => mutate({ ...props, favorite: !props.favorite })}
      isActive={props.favorite}
    />
  );
};
