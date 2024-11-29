import { useEffect } from "react";

import { useAuthStore } from "@/stores";

interface CheckAdminProviderProps {
  children: React.ReactNode;
  openLoginModal: () => void;
}

const CheckAdminProvider = ({
  children,
  openLoginModal,
}: CheckAdminProviderProps) => {
  const { isLoggedIn, isAuthUser } = useAuthStore();

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
