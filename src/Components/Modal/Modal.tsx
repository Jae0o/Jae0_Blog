import React from "react";
import "./Modal.Styles.css";

interface ModalProps {
  children: React.ReactNode;
  width: number;
  height: number;
}

const Modal = ({ children, width, height }: ModalProps) => {
  console.log(width);

  return (
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
  );
};

export default Modal;
