import { useEffect, useState } from "react";

import { throttle } from "lodash";

interface UseScrollTopParams {
  baseElement: HTMLElement;
}

const useScrollTop = ({ baseElement }: UseScrollTopParams) => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const checkScrollTop = throttle(() => {
      const scrollTop = baseElement.scrollTop;

      setIsTop(scrollTop < 10);
    }, 200);

    baseElement.addEventListener("scroll", checkScrollTop);

    return () => baseElement.removeEventListener("scroll", checkScrollTop);
  }, [baseElement]);

  return isTop;
};

export default useScrollTop;
