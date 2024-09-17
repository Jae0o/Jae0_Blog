import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { auth } from "@/api/firebase";
import { authAction } from "@/stores/reducer";

import { onAuthStateChanged } from "firebase/auth";

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { VITE_FIREBASE_ADMIN_USER_ID } = import.meta.env;
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (!user) {
        dispatch(authAction.logout());
        return;
      }

      dispatch(authAction.login(user.uid));

      if (VITE_FIREBASE_ADMIN_USER_ID === user.uid) {
        dispatch(authAction.changeAdmin());
      }
    });
  }, [VITE_FIREBASE_ADMIN_USER_ID, dispatch]);

  return <>{children}</>;
};

export default AuthProvider;
