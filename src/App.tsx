import GlobalStyles from "./styles/GlobalStyles";

import * as S from "./App.style";
import theme from "./styles/theme";
import { ThemeProvider } from "styled-components";

import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import { AuthProvider, QueryProvider, VisitorsCheckerProvider } from "@/api";

import { router } from "./router";
import { store } from "./stores";

const InitialLoading = React.lazy(
  () => import("./pages/InitialLoading/InitialLoading"),
);

const App = (): React.ReactNode => {
  return (
    <Suspense fallback={<InitialLoading />}>
      <QueryProvider>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <AuthProvider>
              <VisitorsCheckerProvider>
                <S.ModalPlace id="modal" />
                <RouterProvider router={router} />
              </VisitorsCheckerProvider>
            </AuthProvider>
          </ThemeProvider>
        </Provider>
      </QueryProvider>
    </Suspense>
  );
};

export default App;
