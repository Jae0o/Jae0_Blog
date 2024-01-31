import Modal from "../../Modal";
import "./ConfirmModal.Styles.css";

interface ConfirmModalProps {
  isShow: boolean;
  message: string;
  falseButtonText?: string;
  trueButtonText?: string;
  onClose: (accept: boolean) => void;
}

const ConfirmModal = ({
  isShow,
  message,
  onClose,
  trueButtonText = "확인",
  falseButtonText = "취소",
}: ConfirmModalProps) => {
  const handleCloseAcceptFalse = () => {
    onClose(false);
  };

  const handleCloseAcceptTrue = () => {
    onClose(true);
  };
  return (
    <Modal
      isShow={isShow}
      onClose={handleCloseAcceptFalse}
      width={36}
      height={20}
      clickAwayEnable={true}
      closeButtonEnable={true}>
      <h4 className="confirm__message">{message}</h4>
      <div className="confirm__actions">
        <button
          className="confirm__button"
          onClick={handleCloseAcceptFalse}>
          {falseButtonText}
        </button>
        <button
          className="confirm__button"
          onClick={handleCloseAcceptTrue}>
          {trueButtonText}
        </button>
      </div>
    </Modal>
  );
};

export default ConfirmModal;
