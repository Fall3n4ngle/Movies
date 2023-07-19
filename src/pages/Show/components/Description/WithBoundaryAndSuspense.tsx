import { FC, Suspense } from "react";
import { ErrorBoundary, ItemDescriptionSkeleton } from "@components";

import { TvDescription, TvDescriptionProps } from "./Description";

export const WithBoundaryAndSuspense: FC<TvDescriptionProps> = ({ tvId }) => {
  return (
    <ErrorBoundary message="Error loading item description">
      <Suspense fallback={<ItemDescriptionSkeleton />}>
        <TvDescription tvId={tvId} />
      </Suspense>
    </ErrorBoundary>
  );
};
