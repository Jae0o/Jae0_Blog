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
      height={33}
      onClose={onClose}
      clickAwayEnable={true}
      closeButtonEnable={true}>
      <h4 className="login__title">{"LOG IN !"}</h4>
      <form className="login__form">
        <LoginFormInput
          title="EMAIL"
          type="email"
        />
        <LoginFormInput
          title="PASSWORD"
          type="password"
        />
        <div className="login__action-container">
          <button className="login__action-button">{"로그인"}</button>
        </div>
      </form>
    </Modal>
  );
};

export default LoginFormModal;
