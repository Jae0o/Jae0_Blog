"use client";

import { useCallback, useState } from "react";

import { UseModalProps } from "./useModal.type";

const useModal = ({ defaultState = false }: UseModalProps) => {
  const [isShow, setIsShow] = useState(defaultState);

  const handleCloseModal = useCallback(() => {
    setIsShow(false);
  }, []);

  const handleOpenModal = useCallback(() => {
    setIsShow(true);
  }, []);

  return {
    isShow,
    handleCloseModal,
    handleOpenModal,
  };
};

export default useModal;
