import React from "react";
import "./Home.Style.css";
import useModal from "../../Components/Modal/Hooks/useModal";
import LoginFormModal from "../../Components/Modal/Components/LoginFormModal/LoginFormModal";

const Home = (): React.ReactNode => {
  const { isShowModal, openModal, closeModal } = useModal();
  return (
    <section className="outlet__home">
      <button onClick={openModal}> open</button>
      <LoginFormModal
        isShow={isShowModal}
        onClose={closeModal}
      />
    </section>
  );
};
export default Home;
