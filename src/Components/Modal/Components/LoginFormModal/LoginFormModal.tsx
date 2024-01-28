import Modal from "../../Modal";
import { LoginFormInput } from "./Components/LoginFormInput";
import "./LoginFormModal.Styles.css";

interface LoginFormModalProps {
  isShow: boolean;
  onClose: () => void;
}

const LoginFormModal = ({ isShow, onClose }: LoginFormModalProps) => {
  return (
    <Modal
      isShow={isShow}
      width={32}
      height={40}
      onClose={onClose}
      clickAwayEnable={true}
      closeButtonEnable={true}>
      <h4 className="login__title">{"LOG IN !"}</h4>
      <LoginFormInput />
      <LoginFormInput />
    </Modal>
  );
};

export default LoginFormModal;
