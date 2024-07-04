import { create } from "zustand";

interface UseAuthStore {
  isLoggedIn: boolean;
  isAuthUser: boolean;
  authUserId: string;
}

const useAuth = create<UseAuthStore>()(() => ({
  isAuthUser: false,
  isLoggedIn: false,
  authUserId: "",
}));

export default useAuth;
