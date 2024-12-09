export interface ModalProps {
  children: React.ReactNode;
  isShow: boolean;
  onClose: () => void;

  disableAwayClick?: boolean;
  hideCloseIcon?: boolean;
}
