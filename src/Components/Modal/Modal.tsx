import React from "react";
import "./Modal.Styles.css";
import ModalPortal from "./Components/ModalPortal";

interface ModalProps {
  isShow: boolean;
  children: React.ReactNode;
  width: number;
  height: number;
}

const Modal = ({ children, isShow, width, height }: ModalProps) => {
  return (
    <ModalPortal isShow={isShow}>
      <section className="modal__background">
        <article
          className="modal__layout-outline"
          style={{
            width: `${width + 4}rem`,
            height: `${height + 4}rem`,
          }}>
          <div
            className="modal__layout"
            style={{
              width: `${width}rem`,
              height: `${height}rem`,
            }}>
            {children}
          </div>
        </article>
      </section>
    </ModalPortal>
  );
};

export default Modal;
