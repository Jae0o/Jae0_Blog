import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";

import { QueryProvider } from "@/api";

import { ContextAuthUserProvider } from "./Context/ContextAuthUser";
import { ContextIsLoadingProvider } from "./Context/ContextIsLoading";
import { ContextPostsProvider } from "./Context/ContextPosts";
import { router } from "./router";

const LoadingPage = React.lazy(() => import("./pages/Loading/Loading"));

const App = (): React.ReactNode => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <QueryProvider>
        <ContextAuthUserProvider>
          <ContextIsLoadingProvider>
            <ContextPostsProvider>
              <RouterProvider router={router} />
              <div id="modal" />
            </ContextPostsProvider>
          </ContextIsLoadingProvider>
        </ContextAuthUserProvider>
      </QueryProvider>
    </Suspense>
  );
};

export default App;
