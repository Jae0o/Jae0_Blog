import { useEffect, useRef, useState } from "react";

const useHover = () => {
  const [isHover, setIsHover] = useState(false);
  const hoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEnterMouse = () => {
      setIsHover(true);
    };

    const handleLeaveMouse = () => {
      setIsHover(false);
    };

    const { current } = hoverRef;

    if (!current) return;

    current.addEventListener("mouseenter", handleEnterMouse);
    current.addEventListener("mouseleave", handleLeaveMouse);

    return () => {
      current.removeEventListener("mouseenter", handleEnterMouse);
      current.removeEventListener("mouseleave", handleLeaveMouse);
    };
  }, []);

  return { isHover, hoverRef };
};

export default useHover;
