import { useContext } from "react";
import { CheckAdminProviderProps } from "./CheckAdminProvider.Types";
import { ContextAuthUser } from "../../Context/ContextAuthUser";

const CheckAdminProvider = ({ children }: CheckAdminProviderProps) => {
  const { isLoggedIn, authUserId } = useContext(ContextAuthUser);
  const { VITE_FIREBASE_ADMIN_USER_ID } = import.meta.env;

  if (!isLoggedIn) {
    return null;
  }

  if (VITE_FIREBASE_ADMIN_USER_ID !== authUserId) {
    return null;
  }

  return <>{children}</>;
};

export default CheckAdminProvider;
