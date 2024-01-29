import { createContext, useState } from "react";
import { ContextProps } from "./Context.Types";
import { firebaseLogin } from "../API/FirebaseAuth";
import { auth } from "../API/Firebase";
import { UserCredential } from "firebase/auth";

interface AuthUserContext {
  isLoggedIn: boolean;
  authUserId: string;
  login: (data: LoginInfo) => Promise<UserCredential>;
}

interface LoginInfo {
  email: string;
  password: string;
}

export const ContextAuthUser = createContext<AuthUserContext>({
  authUserId: "",
  isLoggedIn: false,
  login: () => {},
});

export const ContextAuthUserProvider = ({ children }: ContextProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authUserId, setAuthUserId] = useState<string>("");

  const login = async ({ email, password }: LoginInfo) => {
    if (isLoggedIn) {
      return;
    }

    return firebaseLogin(email, password)
      .then(res => {
        setIsLoggedIn(true);
        setAuthUserId(res.user.uid);
      })
      .catch(error => {
        setIsLoggedIn(false);
        throw Error(error);
      });
  };
  console.log(auth);

  return (
    <ContextAuthUser.Provider value={{ isLoggedIn, login, authUserId }}>
      {children}
    </ContextAuthUser.Provider>
  );
};
