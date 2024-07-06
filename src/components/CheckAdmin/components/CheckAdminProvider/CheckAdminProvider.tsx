import { useEffect } from "react";

import { useAuth } from "@/stores";

interface CheckAdminProviderProps {
  children: React.ReactNode;
  openLoginModal: () => void;
}

const CheckAdminProvider = ({
  children,
  openLoginModal,
}: CheckAdminProviderProps) => {
  const { isLoggedIn, isAuthUser } = useAuth();

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
