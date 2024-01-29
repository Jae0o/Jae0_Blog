import { createContext, useState } from "react";
import { ContextProps } from "./Context.Types";
import { User } from "firebase/auth";

type SetLoginUser = (user: User) => void;
interface AuthUserContext {
  isLoggedIn: boolean;
  authUserId: string;
  setLoginUser: SetLoginUser;
}

export const ContextAuthUser = createContext<AuthUserContext>({
  authUserId: "",
  isLoggedIn: false,
  setLoginUser: () => {},
});

export const ContextAuthUserProvider = ({ children }: ContextProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authUserId, setAuthUserId] = useState<string>("");

  const setLoginUser: SetLoginUser = async user => {
    setAuthUserId(user.uid);
    setIsLoggedIn(true);
  };

  return (
    <ContextAuthUser.Provider value={{ isLoggedIn, authUserId, setLoginUser }}>
      {children}
    </ContextAuthUser.Provider>
  );
};
