import { FC, Suspense } from "react";
import { Box, Title } from "@mantine/core";
import { ErrorBoundary } from "@components";
import { useModuleTitleStyles } from "@shared/styles/ModuleTitle";

import { ItemGallery, ItemGalleryProps } from "./ItemGallery";
import { GallerySkeleton } from "./GallerySkeleton";

interface Props extends ItemGalleryProps {
  errorMsg?: string;
  title?: string;
}

export const WithBoundaryAndSuspense: FC<Props> = ({
  errorMsg = "Error loading item images",
  title = "Item gallery",
  itemId,
  variant,
}) => {
  const { classes } = useModuleTitleStyles();

  return (
    <Box>
      <Title order={2} mb="md" className={classes.title}>
        {title}
      </Title>
      <ErrorBoundary message={errorMsg}>
        <Suspense fallback={<GallerySkeleton />}>
          <ItemGallery variant={variant} itemId={itemId} />
        </Suspense>
      </ErrorBoundary>
    </Box>
  );
};
