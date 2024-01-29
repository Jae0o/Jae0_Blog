import React from "react";
import "./Home.Style.css";
import AlertModal from "../../Components/Modal/Components/AlertModal/AlertModal";

const Home = (): React.ReactNode => {
  return (
    <section className="outlet__home">
      <AlertModal
        isShow={true}
        onClose={() => {}}
      />
    </section>
  );
};
export default Home;
