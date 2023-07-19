import { ErrorBoundary, ItemDescriptionSkeleton } from "@components";
import { FC, Suspense } from "react";

import { PersonDescription, PersonDescriptionProps } from "./PersonDescription";

export const WithBoundaryAndSuspense: FC<PersonDescriptionProps> = ({ personId }) => {
  return (
    <>
      <ErrorBoundary message="Error loading peron description">
        <Suspense fallback={<ItemDescriptionSkeleton />}>
          <PersonDescription personId={personId} />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};
