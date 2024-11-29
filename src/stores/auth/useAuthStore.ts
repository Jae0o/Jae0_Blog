import { create } from "zustand";

interface UseAuthStore {
  isLoggedIn: boolean;
  isAuthUser: boolean;
  authUserId: string;
  setIsLoggedIn: (value: boolean) => void;
  setIsAuthUser: (value: boolean) => void;
  setAuthUserId: (id: string) => void;
}

const useAuthStore = create<UseAuthStore>(set => ({
  isLoggedIn: false,
  isAuthUser: false,
  authUserId: "",

  setIsLoggedIn: value => set(() => ({ isLoggedIn: value })),
  setIsAuthUser: value => set(() => ({ isAuthUser: value })),
  setAuthUserId: id => set(() => ({ authUserId: id })),
}));

export default useAuthStore;
