import { OptionsType } from "@/types/original";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UseOptionsStore {
  categories: string[];
  tags: string[];
  setOption: (type: OptionsType, newList: string[]) => void;
}

const useOptionsStore = create<UseOptionsStore>()(
  persist(
    set => ({
      categories: [],
      tags: [],
      setOption: (type, newList) =>
        set(() => {
          if (type === "category") {
            return { categories: newList };
          }
          return { tags: newList };
        }),
    }),
    { name: "options" },
  ),
);

export default useOptionsStore;
