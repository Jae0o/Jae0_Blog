import { useCallback, useEffect, useState } from "react";

interface UseExitAnimationProps {
  isShow: boolean;
}

const useExitAnimation = ({ isShow }: UseExitAnimationProps) => {
  const [isExit, setIsExit] = useState(false);

  useEffect(() => {
    if (isShow) {
      setIsExit(false);
      return;
    }
  }, [isShow]);

  const handleOffExit = useCallback(() => {
    setIsExit(true);
  }, []);

  return {
    isExit,
    handleOffExit,
  };
};

export default useExitAnimation;
