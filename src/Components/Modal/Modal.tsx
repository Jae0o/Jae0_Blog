import "./Modal.Styles.css";

interface ModalProps {
  width: number;
}

const Modal = ({ width }: ModalProps) => {
  console.log(width);

  return (
    <section className="modal__background">
      <article className="modal__layout-outline"></article>
    </section>
  );
};

export default Modal;
