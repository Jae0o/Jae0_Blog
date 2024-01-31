import Modal from "../../Modal";

interface ConfirmModalProps {
  isShow: boolean;
  onClose: (accept: boolean) => void;
}

const ConfirmModal = ({ isShow, onClose }: ConfirmModalProps) => {
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
      width={40}
      height={40}
      clickAwayEnable={true}
      closeButtonEnable={true}>
      <div></div>
    </Modal>
  );
};

export default ConfirmModal;
