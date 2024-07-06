import { ThemeProvider } from "styled-components";

import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";

import { AuthProvider, QueryProvider } from "@/api";

import * as S from "./App.style";
import { router } from "./router";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/theme";

const InitialLoading = React.lazy(
  () => import("./pages/InitialLoading/InitialLoading"),
);

const App = (): React.ReactNode => {
  return (
    <Suspense fallback={<InitialLoading />}>
      <QueryProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <AuthProvider>
            <S.ModalPlace id="modal" />
            <RouterProvider router={router} />
          </AuthProvider>
        </ThemeProvider>
      </QueryProvider>
    </Suspense>
  );
};

export default App;
