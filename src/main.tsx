import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ErrorBoundary } from "@components";
import { AuthProvider } from "@app/providers/AuthProvider";

import { App } from "./app/App";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ErrorBoundary message="An error occurred">
          <App />
        </ErrorBoundary>
      </AuthProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </StrictMode>
);
