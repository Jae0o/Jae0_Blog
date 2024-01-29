import { useContext, useState } from "react";
import Modal from "../../Modal";
import { LoginFormInput } from "./Components/LoginFormInput";
import "./LoginFormModal.Styles.css";
import { ContextAuthUser } from "../../../../Context/ContextAuthUser";
import { firebaseLogin } from "../../../../API/FirebaseAuth";
import AlertModal from "../AlertModal/AlertModal";
import useModal from "../../Hooks/useModal";
import { loginValidation } from "./Function/loginValidation";
import { LOGIN_VALIDATION } from "../../../../constants/AlertMessage";

interface LoginFormModalProps {
  isShow: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export type LoginInputType = "email" | "password";

const LoginFormModal = ({
  isShow,
  onClose,
  onSuccess,
}: LoginFormModalProps) => {
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
  const { setLoginUser } = useContext(ContextAuthUser);
  const { isShowModal, openModal, closeModal } = useModal();
  const [alertModal, setAlertModal] = useState("");

  const changeLoginInfo = ({
    type,
    value,
  }: {
    type: LoginInputType;
    value: string;
  }) => {
    setLoginInfo(state => ({ ...state, [type]: value }));
  };

  const handleSubmitLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (loginValidation.email(loginInfo.email)) {
      setAlertModal(LOGIN_VALIDATION.SUBMIT_CHECK_EMAIL);
      openModal();
      return;
    }

    if (loginValidation.password(loginInfo.password)) {
      setAlertModal(LOGIN_VALIDATION.SUBMIT_CHECK_PASSWORD);
      openModal();
      return;
    }

    firebaseLogin(loginInfo.email, loginInfo.password)
      .then(({ user }) => {
        setLoginUser(user);
        onSuccess();
      })
      .catch(() => {
        setAlertModal(LOGIN_VALIDATION.SUBMIT_FAIL);
        openModal();
        console.log();
      });
  };

  return (
    <>
      <Modal
        isShow={isShow}
        width={32}
        height={35}
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
        message={alertModal}
      />
    </>
  );
};

export default LoginFormModal;
