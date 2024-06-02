import { useCallback, useState } from "react";

const useToggle = (init?: boolean) => {
  const [isToggle, setIsToggle] = useState(init ?? false);

  const handleToggle = useCallback(() => {
    setIsToggle(isToggle => !isToggle);
  }, []);

  const handleOnToggle = useCallback(() => {
    setIsToggle(true);
  }, []);

  const handleOffToggle = useCallback(() => {
    setIsToggle(false);
  }, []);

  return {
    isToggle,
    handleToggle,
    handleOnToggle,
    handleOffToggle,
  };
};

export default useToggle;
