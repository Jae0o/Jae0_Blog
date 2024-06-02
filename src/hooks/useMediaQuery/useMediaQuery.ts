import { useEffect, useMemo, useState } from "react";

interface UseMediaQueryProps {
  media?: "tablet" | "mobile";
}

const useMediaQuery = ({ media = "tablet" }: UseMediaQueryProps) => {
  const size = useMemo(() => (media === "tablet" ? 1050 : 500), [media]);

  const [isVisible, setIsVisible] = useState(() => {
    if (window.innerWidth < size) {
      return false;
    } else {
      return true;
    }
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < size) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [size]);

  return isVisible;
};

export default useMediaQuery;
