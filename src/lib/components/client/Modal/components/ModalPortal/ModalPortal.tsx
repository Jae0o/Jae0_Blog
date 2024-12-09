"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { ModalPortalProps } from "./ModalPortal.type";

const ModalPortal = ({ isShow, children }: ModalPortalProps) => {
  const [ModalBaseElement, setModalBaseElement] = useState<HTMLElement | null>(
    null,
  );

  useEffect(() => {
    setModalBaseElement(document.body);

    if (!ModalBaseElement) return;

    if (isShow) {
      const originalStyle = window.getComputedStyle(ModalBaseElement).overflow;
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isShow, ModalBaseElement]);

  if (!isShow || !ModalBaseElement) {
    return null;
  }

  return createPortal(<>{children}</>, ModalBaseElement);
};

export default ModalPortal;
