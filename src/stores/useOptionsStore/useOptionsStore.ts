import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UseOptionsStore {
  categories: string[];
  tags: string[];
  setCategoryList: (newList: string[]) => void;
  setTagList: (newList: string[]) => void;
}

const useOptionsStore = create<UseOptionsStore>()(
  persist(
    set => ({
      categories: [],
      tags: [],
      setCategoryList: newList => set(() => ({ categories: newList })),
      setTagList: newList => set(() => ({ tags: newList })),
    }),
    { name: "category_list" },
  ),
);

export default useOptionsStore;
