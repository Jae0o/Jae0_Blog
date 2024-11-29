import { useCallback, useEffect } from "react";

import { getOptions } from "@/api";
import { useOptionsStore } from "@/stores";

const useCategoryList = () => {
  const { categories, setOption } = useOptionsStore();

  const getCategory = useCallback(async () => {
    const newList = await getOptions("category");

    setOption("category", newList);
  }, [setOption]);

  useEffect(() => {
    if (categories.length !== 0) {
      return;
    }

    getCategory();
  }, [categories.length, getCategory]);

  return categories;
};

export default useCategoryList;
