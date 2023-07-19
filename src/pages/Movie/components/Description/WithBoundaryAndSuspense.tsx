import { FC, Suspense } from "react";
import { ErrorBoundary, ItemDescriptionSkeleton } from "@components";

import { MovieDescription, MovieDescriptionProps } from "./Description";

export const WithBoundaryAndSuspense: FC<MovieDescriptionProps> = ({ movieId }) => {
  return (
    <ErrorBoundary message="Error loading item description">
      <Suspense fallback={<ItemDescriptionSkeleton />}>
        <MovieDescription movieId={movieId} />
      </Suspense>
    </ErrorBoundary>
  );
};
