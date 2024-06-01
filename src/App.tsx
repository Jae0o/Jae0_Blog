import { ThemeProvider } from "styled-components";

import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";

import { QueryProvider } from "@/api";

import * as S from "./App.style";
import { ContextAuthUserProvider } from "./Context/ContextAuthUser";
import { router } from "./router";
import GlobalStyles from "./styles/GlobalStyles";
import { theme } from "./styles/theme";

const LoadingPage = React.lazy(() => import("./pages/Loading/Loading"));

const App = (): React.ReactNode => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <QueryProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <ContextAuthUserProvider>
            <S.ModalPlace id="modal" />
            <RouterProvider router={router} />
          </ContextAuthUserProvider>
        </ThemeProvider>
      </QueryProvider>
    </Suspense>
  );
};

export default App;
