import { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import { Group } from "@mantine/core";
import { useAuthContext } from "@app/providers/AuthProvider";

import { getAccountStates } from "../api/getAccountStates";

import { AddToFavorites } from "./AddToFavorites";
import { AddToWatchlist } from "./AddToWatchlist";
import { Rate } from "./Rate";

export interface ItemControlsProps {
  itemId: number;
  variant: "movie" | "tv";
}

export const ItemControls: FC<ItemControlsProps> = ({ itemId, variant }) => {
  const { auth } = useAuthContext();

  const { data: accountStates } = useQuery({
    queryKey: [variant, itemId, "account_states"],
    queryFn: () => getAccountStates(itemId, variant),
  });

  const getItemRating = (itemRating?: boolean | { value?: number }) => {
    if (typeof itemRating === "boolean") {
      return 0;
    }

    return itemRating?.value ?? 0;
  };

  if (!auth.accountId) {
    return null;
  }

  return (
    <Group spacing="xs">
      {accountStates && (
        <>
          <AddToFavorites
            favorite={!!accountStates.favorite}
            media_id={itemId}
            media_type={variant}
            account_id={auth.accountId}
          />
          <AddToWatchlist
            watchlist={!!accountStates.watchlist}
            media_id={itemId}
            media_type={variant}
            account_id={auth.accountId}
          />
          <Rate
            isRated={!!accountStates.rated}
            media_id={itemId}
            media_type={variant}
            ratingValue={getItemRating(accountStates.rated)}
          />
        </>
      )}
    </Group>
  );
};
