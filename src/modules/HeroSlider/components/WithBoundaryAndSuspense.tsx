import { Suspense } from "react";
import { ErrorBoundary } from "@components";

import { HeroSlideSkeleton } from "./HeroSlideSkeleton";
import { HeroSlider } from "./HeroSlider";

export const WithBoundaryAndSuspense = () => {
  return (
    <ErrorBoundary message="Error loading now playing movies">
      <Suspense fallback={<HeroSlideSkeleton />}>
        <HeroSlider />
      </Suspense>
    </ErrorBoundary>
  );
};
