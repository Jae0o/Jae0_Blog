import { useState } from "react";

import { firebaseLogin } from "@/api";
import { AlertModal, Button, Modal } from "@/components";
import { LOGIN_VALIDATION } from "@/constants";
import { useModal } from "@/hooks";

import * as S from "./LoginFormModal.style";
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

  const handleSubmitLogin = () => {
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
        width="32rem"
        height="fit-content"
        onClose={onClose}
        clickAwayEnable={true}
        closeButtonEnable={true}
      >
        <S.ModalTitle>LOG IN</S.ModalTitle>
        <S.ModalForm>
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
          <S.ModalActions>
            <Button
              onClick={handleSubmitLogin}
              style={{
                width: "12rem",
                height: "4rem",
              }}
            >
              로그인
            </Button>
          </S.ModalActions>
        </S.ModalForm>
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
