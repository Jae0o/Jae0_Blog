import { AnimatePresence } from "framer-motion";
import { useTheme } from "styled-components";

import React, { MouseEvent } from "react";

import { CloseIcon } from "../Icons";
import * as S from "./Modal.style";
import { ModalPortal } from "./components";
import { useExitAnimation } from "./hooks";

interface ModalProps {
  isShow: boolean;
  children: React.ReactNode;
  width: string;
  height: string;
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
  closeButtonEnable = true,
}: ModalProps) => {
  const { isExit, handleOffExit } = useExitAnimation({ isShow });
  const theme = useTheme();

  const handleClickAway = ({
    target,
    currentTarget,
  }: MouseEvent<HTMLElement>) => {
    if (!clickAwayEnable) {
      return;
    }

    if (target === currentTarget) {
      onClose();
    }
  };

  return (
    <ModalPortal isShow={!isExit}>
      <AnimatePresence onExitComplete={handleOffExit}>
        {isShow && (
          <S.ModalBackground
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClickAway}
          >
            <S.ModalLayoutOutline
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              $width={width}
              $height={height}
            >
              <S.ModalLayout>
                <S.ModalActions $isVisible={closeButtonEnable}>
                  <S.ModalCloseButton
                    whileHover={{ opacity: theme.opacity.normal }}
                    onClick={onClose}
                  >
                    <CloseIcon size="2.8rem" />
                  </S.ModalCloseButton>
                </S.ModalActions>
                <S.ModalContent>{children}</S.ModalContent>
              </S.ModalLayout>
            </S.ModalLayoutOutline>
          </S.ModalBackground>
        )}
      </AnimatePresence>
    </ModalPortal>
  );
};

export default Modal;
