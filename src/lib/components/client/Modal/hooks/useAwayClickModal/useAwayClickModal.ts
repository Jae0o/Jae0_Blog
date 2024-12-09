"use client";

import { MouseEvent } from "react";

import { UseAwayClickModalProps } from "./useAwayClickModal.type";

const useAwayClickModal = (onClose: UseAwayClickModalProps) => {
  const handleCloseModal = ({ target, currentTarget }: MouseEvent) => {
    if (target !== currentTarget) {
      return;
    }

    onClose();
  };

  return handleCloseModal;
};

export default useAwayClickModal;
