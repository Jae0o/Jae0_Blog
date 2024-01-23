import { createContext, useState } from "react";
import { ContextProps, IsAdminContext, Login } from "./Context.Types";
import { firebaseLogin } from "../API/FirebaseAuth";

export const ContextIsAdmin = createContext<IsAdminContext>({
  isAdminUser: false,
  login: () => {},
  authUserId: "",
});

export const ContextIsAdminUserProvider = ({ children }: ContextProps) => {
  const [isAdminUser, setIsAdminUser] = useState(false);
  const [authUserId, setAuthUserId] = useState<string>("");

  const Login = ({ email, password }: Login) => {
    firebaseLogin(email, password)
      .then(res => {
        setIsAdminUser(true);
        setAuthUserId(res.user.uid);
      })
      .catch(error => console.log(error));
  };

  console.log(authUserId);

  return (
    <ContextIsAdmin.Provider
      value={{ isAdminUser: isAdminUser, login: Login, authUserId }}>
      {children}
    </ContextIsAdmin.Provider>
  );
};
