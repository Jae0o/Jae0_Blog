import { useState } from "react";

const useModal = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const openModal = () => {
    setIsShowModal(true);
  };

  const closeModal = () => {
    setIsShowModal(false);
  };

  return {
    isShowModal,
    openModal,
    closeModal,
  };
};

export default useModal;
