import React from "react";
import CheckAdminProvider from "./Components/CheckAdminProvider";
import LoginFormModal from "../Modal/Components/LoginFormModal/LoginFormModal";
import useModal from "../Modal/Hooks/useModal";
import { useNavigate } from "react-router-dom";
import AlertModal from "../Modal/Components/AlertModal/AlertModal";
import { CHECK_ADMIN } from "../../constants/AlertMessage";

interface CheckAdminProps {
  children: React.ReactNode;
}

const CheckAdmin = ({ children }: CheckAdminProps) => {
  const navigate = useNavigate();
  const {
    isShowModal: isShowLoginModal,
    openModal: openLoginModal,
    closeModal: closeLoginModal,
  } = useModal();

  const {
    isShowModal: isShowAlertModal,
    openModal: openAlertModal,
    closeModal: closeAlertModal,
  } = useModal();

  const handleCloseLoginModal = () => {
    openAlertModal();
    closeLoginModal();
  };

  const handleCloseAlertModal = () => {
    closeAlertModal();
    navigate("/");
  };

  const handleSuccessLogin = () => {
    closeLoginModal();
  };

  return (
    <>
      <LoginFormModal
        isShow={isShowLoginModal}
        onClose={handleCloseLoginModal}
        onSuccess={handleSuccessLogin}
      />

      <AlertModal
        isShow={isShowAlertModal}
        onClose={handleCloseAlertModal}
        message={CHECK_ADMIN.CLOSE_LOGIN_FORM_MODAL_ALERT_MODAL}
      />

      <CheckAdminProvider openLoginModal={openLoginModal}>
        {children}
      </CheckAdminProvider>
    </>
  );
};

export default CheckAdmin;
