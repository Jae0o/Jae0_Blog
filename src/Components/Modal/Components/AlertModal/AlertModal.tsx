import Modal from "../../Modal";
import "./AlertModal.Styles.css";

interface AlertModalProps {
  isShow: boolean;
  onClose: () => void;
}

const AlertModal = ({ isShow, onClose }: AlertModalProps) => {
  return (
    <Modal
      width={32}
      height={20}
      isShow={isShow}
      onClose={onClose}
      clickAwayEnable={true}
      closeButtonEnable={true}>
      <div></div>
    </Modal>
  );
};

export default AlertModal;
