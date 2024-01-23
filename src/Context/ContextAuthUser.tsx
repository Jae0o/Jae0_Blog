import { createContext, useState } from "react";
import { ContextProps, AuthUserContext, LoginInfo } from "./Context.Types";
import { firebaseLogin } from "../API/FirebaseAuth";

export const ContextAuthUser = createContext<AuthUserContext>({
  authUserId: "",
  isLoggedIn: false,
  login: () => {},
});

export const ContextAuthUserProvider = ({ children }: ContextProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authUserId, setAuthUserId] = useState<string>("");

  const login = ({ email, password }: LoginInfo) => {
    if (isLoggedIn) {
      return;
    }

    firebaseLogin(email, password)
      .then(res => {
        setIsLoggedIn(true);
        setAuthUserId(res.user.uid);
      })
      .catch(error => {
        console.log(error);
        setIsLoggedIn(false);
      });
  };

  return (
    <ContextAuthUser.Provider value={{ isLoggedIn, login, authUserId }}>
      {children}
    </ContextAuthUser.Provider>
  );
};
