import "./Modal.style.css";

import React from "react";
import { IoCloseSharp } from "react-icons/io5";

import { ModalPortal } from "./components";

interface ModalProps {
  isShow: boolean;
  children: React.ReactNode;
  width: number;
  height: number;
  clickAwayEnable?: boolean;
  closeButtonEnable?: boolean;
  onClose: () => void;
}

const Modal = ({
  children,
  isShow,
  width,
  height,
  onClose,
  clickAwayEnable,
  closeButtonEnable,
}: ModalProps) => {
  const handleClickAway = ({
    target,
    currentTarget,
  }: React.MouseEvent<HTMLElement>) => {
    if (!clickAwayEnable) {
      return;
    }

    if (target === currentTarget) {
      onClose();
    }
  };

  return (
    <ModalPortal isShow={isShow}>
      <section
        className="modal__background"
        onClick={handleClickAway}
      >
        <article
          className="modal__layout-outline"
          style={{
            width: `${width + 4}rem`,
            height: closeButtonEnable ? `${height + 7}rem` : `${height + 4}rem`,
          }}
        >
          <div
            className="modal__layout"
            style={{
              width: `${width}rem`,
              height: closeButtonEnable ? `${height + 3}rem` : `${height}rem`,
            }}
          >
            <div
              className="modal__actions"
              style={{ display: closeButtonEnable ? "flex" : "none" }}
            >
              <button
                className="modal__button-close"
                onClick={onClose}
              >
                <IoCloseSharp />
              </button>
            </div>
            <div
              className="modal__content"
              style={{
                width: `${width}rem`,
                height: `${height}rem`,
              }}
            >
              {children}
            </div>
          </div>
        </article>
      </section>
    </ModalPortal>
  );
};

export default Modal;
