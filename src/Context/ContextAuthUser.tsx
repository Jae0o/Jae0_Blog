import { createContext, useState } from "react";
import { ContextProps } from "./Context.Types";
import { User } from "firebase/auth";

type SetLoginUser = (user: User) => void;
interface AuthUserContext {
  isLoggedIn: boolean;
  isAuthUser: boolean;
  authUserId: string;
  setLoginUser: SetLoginUser;
}

export const ContextAuthUser = createContext<AuthUserContext>({
  authUserId: "",
  isLoggedIn: false,
  isAuthUser: false,
  setLoginUser: () => {},
});

export const ContextAuthUserProvider = ({ children }: ContextProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAuthUser, setIsAuthUser] = useState(false);
  const [authUserId, setAuthUserId] = useState<string>("");
  const { VITE_FIREBASE_ADMIN_USER_ID } = import.meta.env;

  const setLoginUser: SetLoginUser = async user => {
    setAuthUserId(user.uid);
    setIsLoggedIn(true);

    if (VITE_FIREBASE_ADMIN_USER_ID === user.uid) {
      setIsAuthUser(true);
    }
  };

  return (
    <ContextAuthUser.Provider
      value={{ isLoggedIn, authUserId, isAuthUser, setLoginUser }}>
      {children}
    </ContextAuthUser.Provider>
  );
};
