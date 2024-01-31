import React from "react";
import "./Home.Style.css";
import ConfirmModal from "../../Components/Modal/Components/ConfirmModal/ConfirmModal";

const Home = (): React.ReactNode => {
  return (
    <section className="outlet__home">
      <ConfirmModal
        isShow={true}
        onClose={res => console.log(res)}
      />
    </section>
  );
};

export default Home;
