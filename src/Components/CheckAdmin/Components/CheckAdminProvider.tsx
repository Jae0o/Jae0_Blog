import { useContext, useEffect } from "react";
import { ContextAuthUser } from "@/Context/ContextAuthUser";

interface CheckAdminProviderProps {
  children: React.ReactNode;
  openLoginModal: () => void;
}

const CheckAdminProvider = ({
  children,
  openLoginModal,
}: CheckAdminProviderProps) => {
  const { isLoggedIn, isAuthUser } = useContext(ContextAuthUser);

  useEffect(() => {
    if (!isLoggedIn) {
      openLoginModal();
    }
  }, [isLoggedIn, openLoginModal]);

  if (!isAuthUser) {
    return null;
  }

  return <>{children}</>;
};

export default CheckAdminProvider;
