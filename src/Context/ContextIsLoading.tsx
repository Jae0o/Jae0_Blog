import React, { createContext, useState } from "react";
import {
  IsLoadingContext,
  ContextProps,
  UpdateIsLoading,
} from "./Context.Types";

export const ContextIsLoading = createContext<IsLoadingContext>({
  isLoading: false,
  updateIsLoading: () => {},
});

export const ContextIsLoadingProvider: React.FC<ContextProps> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const updateIsLoading: UpdateIsLoading = state => {
    setIsLoading(state);
  };

  return (
    <ContextIsLoading.Provider value={{ isLoading, updateIsLoading }}>
      {children}
    </ContextIsLoading.Provider>
  );
};
