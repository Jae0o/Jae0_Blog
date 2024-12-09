"use client";

import { CloseIcon } from "../../server";
import { ModalProps } from "./Modal.type";
import { ModalPortal } from "./components";
import { useAwayClickModal, useKeydownModal } from "./hooks";

import { AnimatePresence, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const Modal = ({
  children,
  isShow,
  onClose,
  hideCloseIcon = false,
  disableAwayClick = false,
}: ModalProps) => {
  const handleCloseModal = useAwayClickModal(onClose);

  useKeydownModal({
    callback: onClose,
    isShow,
    disableAwayClick,
  });

  const backgroundVariant = {
    close: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
  };

  const modalVariant = {
    close: {
      opacity: 0,
      scale: 0,
    },
    show: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <AnimatePresence>
      {isShow && (
        <ModalPortal isShow={isShow}>
          <motion.section
            className="w-full h-full flex items-center justify-center fixed top-0 left-0 bg-transparent_90 overflow-auto z-modal"
            onClick={event => !disableAwayClick && handleCloseModal(event)}
            variants={backgroundVariant}
            initial="close"
            animate="show"
            exit="close"
          >
            <motion.article
              className={twMerge(
                "min-h-[4rem] min-w-[4rem] p-[1rem] flex justify-end relative bg-white rounded-8",
                !hideCloseIcon && "pt-[2.2rem]",
              )}
              variants={modalVariant}
              initial="close"
              animate="show"
              exit="close"
            >
              {!hideCloseIcon && (
                <motion.i
                  onClick={onClose}
                  className="w-[1.8rem] h-[1.8rem] absolute top-[0.3rem] cursor-pointer select-none"
                  whileTap={{
                    scale: 1.2,
                  }}
                  whileHover={{
                    opacity: 0.4,
                  }}
                >
                  <CloseIcon size="100%" />
                </motion.i>
              )}

              {children}
            </motion.article>
          </motion.section>
        </ModalPortal>
      )}
    </AnimatePresence>
  );
};

export default Modal;
