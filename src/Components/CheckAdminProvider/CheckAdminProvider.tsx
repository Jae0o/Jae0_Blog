import { useContext } from "react";
import { ContextAuthUser } from "../../Context/ContextAuthUser";

interface CheckAdminProviderProps {
  children: React.ReactNode;
}

const CheckAdminProvider = ({ children }: CheckAdminProviderProps) => {
  const { isLoggedIn, authUserId } = useContext(ContextAuthUser);
  const { VITE_FIREBASE_ADMIN_USER_ID } = import.meta.env;

  if (!isLoggedIn) {
    return;
  }

  if (VITE_FIREBASE_ADMIN_USER_ID !== authUserId) {
    return null;
  }

  return <>{children}</>;
};

export default CheckAdminProvider;
