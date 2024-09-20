import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useStoreSelector } from "@/stores";
import { fetchOptionsAction } from "@/stores/reducer/options/options.saga";

const useTagList = () => {
  const dispatch = useDispatch();
  const tags = useStoreSelector(state => state.options.tags);

  useEffect(() => {
    if (tags.length !== 0) {
      return;
    }

    dispatch(fetchOptionsAction("tag"));
  }, [dispatch, tags.length]);

  return tags;
};

export default useTagList;
