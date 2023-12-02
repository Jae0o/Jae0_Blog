import React, { createContext, useState } from "react";
import {
  ContextIsLoadingType,
  ContextProps,
  UpdateIsLoadingFunc,
} from "../Types/Context/ContextTypes";

export const ContextIsLoading = createContext<ContextIsLoadingType>({
  isLoading: false,
  updateIsLoading: () => {},
});

export const ContextIsLoadingProvider: React.FC<ContextProps> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const updateIsLoading: UpdateIsLoadingFunc = state => {
    setIsLoading(state);
    console.log(state);
  };

  return (
    <ContextIsLoading.Provider value={{ isLoading, updateIsLoading }}>
      {children}
    </ContextIsLoading.Provider>
  );
};
