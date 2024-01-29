import { useContext, useEffect } from "react";
import { ContextAuthUser } from "../../../Context/ContextAuthUser";

interface CheckAdminProviderProps {
  children: React.ReactNode;
  openLoginModal: () => void;
}

const CheckAdminProvider = ({
  children,
  openLoginModal,
}: CheckAdminProviderProps) => {
  const { isLoggedIn, authUserId } = useContext(ContextAuthUser);
  const { VITE_FIREBASE_ADMIN_USER_ID } = import.meta.env;

  useEffect(() => {
    if (!isLoggedIn) {
      openLoginModal();
    }
  }, [isLoggedIn, openLoginModal]);

  if (VITE_FIREBASE_ADMIN_USER_ID !== authUserId) {
    return null;
  }

  return <>{children}</>;
};

export default CheckAdminProvider;
