import { useContext, useState } from "react";
import Modal from "../../Modal";
import { LoginFormInput } from "./Components/LoginFormInput";
import "./LoginFormModal.Styles.css";
import { ContextAuthUser } from "../../../../Context/ContextAuthUser";
import { firebaseLogin } from "../../../../API/FirebaseAuth";
import AlertModal from "../AlertModal/AlertModal";
import useModal from "../../Hooks/useModal";

interface LoginFormModalProps {
  isShow: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const LoginFormModal = ({
  isShow,
  onClose,
  onSuccess,
}: LoginFormModalProps) => {
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
  const { setLoginUser } = useContext(ContextAuthUser);
  const { isShowModal, openModal, closeModal } = useModal();

  const changeLoginInfo = ({
    type,
    value,
  }: {
    type: "email" | "password";
    value: string;
  }) => {
    setLoginInfo(state => ({ ...state, [type]: value }));
  };

  const handleSubmitLogin = (e: React.FormEvent) => {
    e.preventDefault();

    firebaseLogin(loginInfo.email, loginInfo.password)
      .then(({ user }) => {
        setLoginUser(user);
        onSuccess();
      })
      .catch(() => {
        openModal();
        console.log();
      });
  };

  return (
    <>
      <Modal
        isShow={isShow}
        width={32}
        height={33}
        onClose={onClose}
        clickAwayEnable={true}
        closeButtonEnable={true}>
        <h4 className="login__title">{"LOG IN !"}</h4>
        <form
          className="login__form"
          onSubmit={handleSubmitLogin}>
          <LoginFormInput
            title="EMAIL"
            type="email"
            value={loginInfo.email}
            onChange={changeLoginInfo}
          />
          <LoginFormInput
            title="PASSWORD"
            type="password"
            value={loginInfo.password}
            onChange={changeLoginInfo}
          />
          <div className="login__action-container">
            <button className="login__action-button">{"로그인"}</button>
          </div>
        </form>
      </Modal>

      <AlertModal
        isShow={isShowModal}
        onClose={closeModal}
      />
    </>
  );
};

export default LoginFormModal;
