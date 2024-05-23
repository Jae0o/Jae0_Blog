import React from "react";
import { createPortal } from "react-dom";

interface ModalPortalProps {
  isShow: boolean;
  children: React.ReactNode;
}

const ModalPortal = ({ isShow, children }: ModalPortalProps) => {
  if (!isShow) {
    return;
  }

  const ModalPlaceElement = document.querySelector("#modal");

  if (!ModalPlaceElement) {
    return;
  }

  return createPortal(<>{children}</>, ModalPlaceElement);
};

export default ModalPortal;
