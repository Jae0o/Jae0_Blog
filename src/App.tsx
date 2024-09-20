import GlobalStyles from "./styles/GlobalStyles";

import * as S from "./App.style";
import theme from "./styles/theme";
import { ThemeProvider } from "styled-components";

import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import { AuthProvider, QueryProvider, VisitorsCheckerProvider } from "@/api";

import InitialLoading from "./pages/InitialLoading/InitialLoading";
import { router } from "./router";
import { persistor, store } from "./stores";

import { PersistGate } from "redux-persist/integration/react";

const App = (): React.ReactNode => {
  return (
    <Suspense fallback={<InitialLoading />}>
      <QueryProvider>
        <Provider store={store}>
          <PersistGate
            loading={<InitialLoading />}
            persistor={persistor}
          >
            <ThemeProvider theme={theme}>
              <GlobalStyles />
              <AuthProvider>
                <VisitorsCheckerProvider>
                  <S.ModalPlace id="modal" />
                  <RouterProvider router={router} />
                </VisitorsCheckerProvider>
              </AuthProvider>
            </ThemeProvider>
          </PersistGate>
        </Provider>
      </QueryProvider>
    </Suspense>
  );
};

export default App;
