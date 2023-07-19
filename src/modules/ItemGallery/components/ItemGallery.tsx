import { FC } from "react";
import { Text } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";

import { IVariant } from "../models/Variant";
import { getItemImages } from "../api/getItemImages";

import { Gallery } from "./Gallery";

export interface ItemGalleryProps {
  variant: IVariant;
  itemId: string;
}

export const ItemGallery: FC<ItemGalleryProps> = ({ itemId, variant }) => {
  const { data: images } = useQuery({
    queryKey: [variant, itemId, "images"],
    queryFn: () => getItemImages(itemId, variant),
  });

  if (!images?.length) {
    return <Text>No images found</Text>;
  }

  return <Gallery images={images} />;
};
