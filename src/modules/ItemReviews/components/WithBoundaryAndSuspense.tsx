import { FC, Suspense, useRef } from "react";
import { ErrorBoundary } from "@components";
import { Box, Title } from "@mantine/core";
import { useModuleTitleStyles } from "@shared/styles/ModuleTitle";

import { ItemReviews, ItemReviewsProps } from "./Reviews";
import { ReviewCardSkeleton } from "./ReviewCardSkeleton";

interface Props extends Omit<ItemReviewsProps, "titleRef"> {
  errorMsg?: string;
}

export const WithBoundaryAndSuspense: FC<Props> = ({
  itemId,
  variant,
  errorMsg = "Error loading reviews",
}) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const { classes } = useModuleTitleStyles();

  return (
    <Box>
      <Title
        order={2}
        ref={titleRef}
        mb="md"
        className={classes.title}
        style={{ textAlign: "center" }}
      >
        Reviews
      </Title>
      <ErrorBoundary message={errorMsg}>
        <Suspense fallback={<ReviewCardSkeleton />}>
          <ItemReviews itemId={itemId} variant={variant} titleRef={titleRef} />
        </Suspense>
      </ErrorBoundary>
    </Box>
  );
};
