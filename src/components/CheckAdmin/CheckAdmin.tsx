import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { AlertModal, LoginFormModal } from "@/components";
import { CHECK_ADMIN } from "@/constants";
import { useToggle } from "@/hooks";
import { RootStore } from "@/stores";

import { CheckAdminProvider } from "./components";

interface CheckAdminProps {
  children: React.ReactNode;
}

const CheckAdmin = ({ children }: CheckAdminProps) => {
  const navigate = useNavigate();

  const isLoggedIn = useSelector((state: RootStore) => state.auth.isLoggedIn);

  const {
    isToggle: isShowLoginModal,
    handleOnToggle: openLoginModal,
    handleOffToggle: closeLoginModal,
  } = useToggle();

  const {
    isToggle: isShowAlertModal,
    handleOnToggle: openAlertModal,
    handleOffToggle: closeAlertModal,
  } = useToggle();

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
        isShow={!isLoggedIn && isShowLoginModal}
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
