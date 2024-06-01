import "./AlertModal.style.css";

import { Modal } from "@/components";

import * as S from "./AlertModal.style";

interface AlertModalProps {
  isShow: boolean;
  message: string;
  onClose: () => void;
}

const AlertModal = ({ isShow, message, onClose }: AlertModalProps) => {
  const replaceMessage = message.replace(/\\n | \n/g, "\n");

  return (
    <Modal
      width={32}
      height={18}
      isShow={isShow}
      onClose={onClose}
      clickAwayEnable={true}
      closeButtonEnable={true}
    >
      <S.ModalMessage>{replaceMessage}</S.ModalMessage>
      <S.ModalActions>
        <button
          className="alert__button"
          onClick={onClose}
        >
          닫기
        </button>
      </S.ModalActions>
    </Modal>
  );
};

export default AlertModal;
