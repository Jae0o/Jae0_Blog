import { useEffect } from "react";

import { useStoreSelector } from "@/stores";

interface CheckAdminProviderProps {
  children: React.ReactNode;
  openLoginModal: () => void;
}

const CheckAdminProvider = ({
  children,
  openLoginModal,
}: CheckAdminProviderProps) => {
  const isLoggedIn = useStoreSelector(state => state.auth.isLoggedIn);
  const isAuthUser = useStoreSelector(state => state.auth.isAuthUser);

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
