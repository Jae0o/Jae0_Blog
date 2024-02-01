import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContextAuthUser } from "@/Context/ContextAuthUser";
import { CHECK_ADMIN } from "@/constants/AlertMessage";
import AlertModal from "../Modal/Components/AlertModal/AlertModal";
import LoginFormModal from "../Modal/Components/LoginFormModal/LoginFormModal";
import useModal from "../Modal/Hooks/useModal";
import CheckAdminProvider from "./Components/CheckAdminProvider";

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
