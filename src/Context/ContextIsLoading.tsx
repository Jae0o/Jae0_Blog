import React, { createContext, useState } from "react";
import { ContextProps } from "./Context.Types";

interface IsLoadingContext {
  isLoading: boolean;
  updateIsLoading: (state: boolean) => void;
}

export const ContextIsLoading = createContext<IsLoadingContext>({
  isLoading: false,
  updateIsLoading: () => {},
});

export const ContextIsLoadingProvider = ({
  children,
}: ContextProps): React.ReactNode => {
  const [isLoading, setIsLoading] = useState(false);

  const updateIsLoading = (state: boolean) => {
    setIsLoading(state);
  };

  return (
    <ContextIsLoading.Provider value={{ isLoading, updateIsLoading }}>
      {children}
    </ContextIsLoading.Provider>
  );
};
