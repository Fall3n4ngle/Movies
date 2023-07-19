import { FC, Suspense } from "react";
import { ErrorBoundary } from "@components";

import { ItemCreditsProps, ItemCredits } from "./Credits";
import { CreditsSkeleton } from "./CreditsSkeleton";

export const WithBoundaryAndSuspense: FC<ItemCreditsProps> = ({ itemId, variant }) => {
  return (
    <ErrorBoundary message="Error loading movie credits">
      <Suspense fallback={<CreditsSkeleton />}>
        <ItemCredits itemId={itemId} variant={variant} />
      </Suspense>
    </ErrorBoundary>
  );
};
