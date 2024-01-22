import { createContext, useState } from "react";
import { ContextProps, IsAdminContext, Login } from "./Context.Types";
import { login } from "../API/FirebaseAuth";

export const ContextIsAdmin = createContext<IsAdminContext>({
  isAdminUser: false,
  login: () => {},
});

export const ContextIsAdminUser = ({ children }: ContextProps) => {
  const [isAdminUser, setIsAdminUser] = useState(false);

  const Login = ({ email, password }: Login) => {
    login(email, password);
    setIsAdminUser(true);
  };

  return (
    <ContextIsAdmin.Provider value={{ isAdminUser: isAdminUser, login: Login }}>
      {children}
    </ContextIsAdmin.Provider>
  );
};
