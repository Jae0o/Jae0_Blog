import CONFIRM_ANIMATION from "@/assets/animation/confirm_animation.json";
import { Button, Modal } from "@/components";
import { Player } from "@lottiefiles/react-lottie-player";

import * as S from "./ConfirmModal.style";

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
  const replaceMessage = message.replace(/\\n | \n/g, "\n");

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
      width="32rem"
      height="fit-content"
      clickAwayEnable={true}
      closeButtonEnable={true}
    >
      <S.ConfirmModalLayout>
        <Player
          src={CONFIRM_ANIMATION}
          style={{
            width: "24rem",
            height: "20rem",
          }}
          autoplay
          keepLastFrame
        />
        <S.ModalMessage>{replaceMessage}</S.ModalMessage>
        <S.ModalActions>
          <Button
            onClick={handleCloseAcceptFalse}
            style={{
              width: "10rem",
              height: "4rem",
            }}
            backgroundColor="red"
          >
            {falseButtonText}
          </Button>
          <Button
            onClick={handleCloseAcceptTrue}
            style={{
              width: "10rem",
              height: "4rem",
            }}
            backgroundColor="yellow"
          >
            {trueButtonText}
          </Button>
        </S.ModalActions>
      </S.ConfirmModalLayout>
    </Modal>
  );
};

export default ConfirmModal;
