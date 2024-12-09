"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { ModalPortalProps } from "./ModalPortal.type";

const ModalPortal = ({ isShow, children }: ModalPortalProps) => {
  const [ModalBaseElement] = useState<HTMLElement>(document.body);

  useEffect(() => {
    if (isShow) {
      const originalStyle = window.getComputedStyle(ModalBaseElement).overflow;
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isShow, ModalBaseElement]);

  if (!isShow) {
    return null;
  }

  return createPortal(<>{children}</>, ModalBaseElement);
};

export default ModalPortal;
