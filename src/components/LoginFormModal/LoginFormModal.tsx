import "./LoginFormModal.style.css";

import { useState } from "react";

import { firebaseLogin } from "@/api";
import { AlertModal, Modal } from "@/components";
import { LOGIN_VALIDATION } from "@/constants";
import { useModal } from "@/hooks";

import { LoginFormInput } from "./components";
import { loginValidation } from "./utils";

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

    firebaseLogin(loginInfo)
      .then(() => {
        onSuccess();
      })
      .catch(() => {
        setAlertModal(LOGIN_VALIDATION.SUBMIT_FAIL);
        openModal();
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
