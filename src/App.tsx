import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";

import { QueryProvider } from "@/api";

import { ContextAuthUserProvider } from "./Context/ContextAuthUser";
import { router } from "./router";

const LoadingPage = React.lazy(() => import("./pages/Loading/Loading"));

const App = (): React.ReactNode => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <QueryProvider>
        <ContextAuthUserProvider>
          <RouterProvider router={router} />
          <div id="modal" />
        </ContextAuthUserProvider>
      </QueryProvider>
    </Suspense>
  );
};

export default App;
