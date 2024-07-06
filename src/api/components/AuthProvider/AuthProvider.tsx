import { onAuthStateChanged } from "firebase/auth";

import { useEffect } from "react";

import { auth } from "@/api/firebase";
import { useAuthStore } from "@/stores";

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { VITE_FIREBASE_ADMIN_USER_ID } = import.meta.env;

  const { setIsLoggedIn, setAuthUserId, setIsAuthUser } = useAuthStore();
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (!user) {
        setIsAuthUser(false);
        setIsLoggedIn(false);
        setAuthUserId("");
        return;
      }

      setIsLoggedIn(true);
      setAuthUserId(user.uid);

      if (VITE_FIREBASE_ADMIN_USER_ID === user.uid) {
        setIsAuthUser(true);
      }
    });
  }, [
    VITE_FIREBASE_ADMIN_USER_ID,
    setAuthUserId,
    setIsAuthUser,
    setIsLoggedIn,
  ]);

  return <>{children}</>;
};

export default AuthProvider;
