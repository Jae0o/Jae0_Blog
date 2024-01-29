import React from "react";
import CheckAdminProvider from "./Components/CheckAdminProvider";
import LoginFormModal from "../Modal/Components/LoginFormModal/LoginFormModal";
import useModal from "../Modal/Hooks/useModal";
import { useNavigate } from "react-router-dom";

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

  const handleCloseLoginModal = () => {
    navigate("/");
    closeLoginModal();
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

      <CheckAdminProvider openLoginModal={openLoginModal}>
        {children}
      </CheckAdminProvider>
    </>
  );
};

export default CheckAdmin;
