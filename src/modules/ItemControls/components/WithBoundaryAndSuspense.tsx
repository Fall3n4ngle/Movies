import { ErrorBoundary } from "@components";
import { FC, Suspense } from "react";

import { ItemControls, ItemControlsProps } from "./ItemControls";
import { ItemControlsSkeleton } from "./ItemControlsSkeleton";

export const WithBoundaryAndSuspense: FC<ItemControlsProps> = ({ itemId, variant }) => {
  return (
    <ErrorBoundary message="Error loading item controls">
      <Suspense fallback={<ItemControlsSkeleton />}>
        <ItemControls itemId={itemId} variant={variant} />
      </Suspense>
    </ErrorBoundary>
  );
};
