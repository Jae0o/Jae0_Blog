import "./AlertModal.style.css";

import { Modal } from "@/components";

interface AlertModalProps {
  isShow: boolean;
  message: string;
  onClose: () => void;
}

const AlertModal = ({ isShow, message, onClose }: AlertModalProps) => {
  return (
    <Modal
      width={32}
      height={18}
      isShow={isShow}
      onClose={onClose}
      clickAwayEnable={true}
      closeButtonEnable={true}
    >
      <h4 className="alert__message">{message}</h4>
      <div className="alert__action">
        <button
          className="alert__button"
          onClick={onClose}
        >
          {"닫기"}
        </button>
      </div>
    </Modal>
  );
};

export default AlertModal;
