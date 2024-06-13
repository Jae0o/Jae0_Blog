import { useCallback, useEffect } from "react";

import { getOptions } from "@/api";
import { useOptionsStore } from "@/stores";

const useTagList = () => {
  const { tags, setOption } = useOptionsStore();

  const getTag = useCallback(async () => {
    const newList = await getOptions("tag");

    setOption("tag", newList);
  }, [setOption]);

  useEffect(() => {
    if (tags.length !== 0) {
      return;
    }

    getTag();
  }, [getTag, tags.length]);

  return tags;
};

export default useTagList;
