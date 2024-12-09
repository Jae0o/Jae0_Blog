"use client";

import { useCallback, useState } from "react";

import { UseModalProps, UseModalReturn } from "./useModal.type";

const useModal = ({
  defaultValue = false,
}: UseModalProps = {}): UseModalReturn => {
  const [isShow, setIsShow] = useState(defaultValue);

  const showModal = useCallback(() => setIsShow(true), []);

  const closeModal = useCallback(() => setIsShow(false), []);

  return [isShow, showModal, closeModal];
};

export default useModal;
