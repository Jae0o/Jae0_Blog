import { onAuthStateChanged } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "@/API/Firebase";
import { ContextProps } from "./Context.Types";

interface AuthUserContext {
  isLoggedIn: boolean;
  isAuthUser: boolean;
  authUserId: string;
}

export const ContextAuthUser = createContext<AuthUserContext>({
  authUserId: "",
  isLoggedIn: false,
  isAuthUser: false,
});

export const ContextAuthUserProvider = ({ children }: ContextProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAuthUser, setIsAuthUser] = useState(false);
  const [authUserId, setAuthUserId] = useState<string>("");
  const { VITE_FIREBASE_ADMIN_USER_ID } = import.meta.env;

  console.log(isLoggedIn);

  onAuthStateChanged(auth, user => {
    if (!user) {
      setIsAuthUser(false);
      setIsLoggedIn(false);
      setAuthUserId("");
      return;
    }

    setIsLoggedIn(true);
    setAuthUserId(user.uid);

    if (VITE_FIREBASE_ADMIN_USER_ID === user.uid) {
      setIsAuthUser(true);
    }
  });

  return (
    <ContextAuthUser.Provider value={{ isLoggedIn, authUserId, isAuthUser }}>
      {children}
    </ContextAuthUser.Provider>
  );
};
