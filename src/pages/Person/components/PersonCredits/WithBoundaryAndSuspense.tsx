import { FC, Suspense } from "react";
import { CardsListSkeleton, ErrorBoundary } from "@components";
import { Title } from "@mantine/core";
import { useModuleTitleStyles } from "@shared/styles/ModuleTitle";

import { PersonCredits, PersonCreditsProps } from "./PersonCredits";

export const WithBoundaryAndSuspense: FC<PersonCreditsProps> = ({ personId }) => {
  const { classes } = useModuleTitleStyles();

  return (
    <>
      <Title order={2} className={classes.title}>
        Person credits
      </Title>
      <ErrorBoundary message="Error loading person credits">
        <Suspense fallback={<CardsListSkeleton />}>
          <PersonCredits personId={personId} />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};
