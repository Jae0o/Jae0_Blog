import React from "react";
import "./Home.Style.css";
import Modal from "../../Components/Modal/Modal";

const Home = (): React.ReactNode => {
  return (
    <section className="outlet__home">
      <Modal width={40} />
    </section>
  );
};
export default Home;
