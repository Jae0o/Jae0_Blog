import { useTheme } from "styled-components";

import ALERT_ANIMATION from "@/assets/animation/alert_animation.json";
import { Button, Modal } from "@/components";
import { Player } from "@lottiefiles/react-lottie-player";

import * as S from "./AlertModal.style";

interface AlertModalProps {
  isShow: boolean;
  message: string;
  onClose: () => void;
}

const AlertModal = ({ isShow, message, onClose }: AlertModalProps) => {
  const theme = useTheme();
  const replaceMessage = message.replace(/\\n | \n/g, "\n");

  return (
    <Modal
      width="32rem"
      height="fit-content"
      isShow={isShow}
      onClose={onClose}
      clickAwayEnable={true}
      closeButtonEnable={true}
    >
      <S.AlertModalLayout>
        <Player
          src={ALERT_ANIMATION}
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
            onClick={onClose}
            backgroundColor="yellow"
            style={{
              width: "12rem",
              height: "4rem",
              fontWeight: theme.fontWeight.bold,
            }}
          >
            닫기
          </Button>
        </S.ModalActions>
      </S.AlertModalLayout>
    </Modal>
  );
};

export default AlertModal;
