import { useCallback, useState } from "react";

const useModal = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const openModal = useCallback(() => {
    setIsShowModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsShowModal(false);
  }, []);

  return {
    isShowModal,
    openModal,
    closeModal,
  };
};

export default useModal;
