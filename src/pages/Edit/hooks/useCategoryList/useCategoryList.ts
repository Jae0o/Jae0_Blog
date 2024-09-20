import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useStoreSelector } from "@/stores";
import { fetchOptionsAction } from "@/stores/reducer/options/options.saga";

const useCategoryList = () => {
  const dispatch = useDispatch();
  const categories = useStoreSelector(state => state.options.categories);

  useEffect(() => {
    if (categories.length !== 0) {
      return;
    }

    dispatch(fetchOptionsAction("category"));
  }, [categories.length, dispatch]);

  return categories;
};

export default useCategoryList;
