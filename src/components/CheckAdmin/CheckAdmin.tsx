import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContextAuthUser } from "@/Context/ContextAuthUser";
import { AlertModal, LoginFormModal } from "@/components";
import { CHECK_ADMIN } from "@/constants";
import { useModal } from "@/hooks";
import { CheckAdminProvider } from "./components";

interface CheckAdminProps {
  children: React.ReactNode;
}

const CheckAdmin = ({ children }: CheckAdminProps) => {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(ContextAuthUser);
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
