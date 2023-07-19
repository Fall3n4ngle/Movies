import { Suspense } from "react";
import { CardsSliderSkeleton, ErrorBoundary } from "@components";
import { Box, Title } from "@mantine/core";
import { useModuleTitleStyles } from "@shared/styles/ModuleTitle";

import { ItemsSlider, ItemsSliderProps } from "./ItemsSlider";

interface Props extends ItemsSliderProps {
  errorMsg?: string;
}

export const WithBoundaryAndSuspense = ({
  variant,
  queryKey,
  url,
  title = "Items",
  errorMsg = "Error loading items",
}: Props) => {
  const { classes } = useModuleTitleStyles();

  return (
    <Box>
      <Title order={2} className={classes.title} mb="md">
        {title}
      </Title>
      <ErrorBoundary message={errorMsg}>
        <Suspense fallback={<CardsSliderSkeleton />}>
          <ItemsSlider variant={variant} queryKey={queryKey} url={url} title={title} />
        </Suspense>
      </ErrorBoundary>
    </Box>
  );
};
