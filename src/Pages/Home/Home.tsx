import React from "react";
import "./Home.Style.css";
import AlertModal from "../../Components/Modal/Components/AlertModal/AlertModal";

const Home = (): React.ReactNode => {
  return (
    <section className="outlet__home">
      <AlertModal
        isShow={true}
        onClose={() => {}}
        message="뭐 하셨나요? 루언루 ㄹㅇㄴㄹ ㄴㅇ ㄹㄴㅇ ㄹ ㄴㅇㅎ ㅇㄴ ㅎㄴㅇㅎㄴㅇ ㅎㄴ ㅇㅎ ㅇㄴㅎ ㄴㅇ ㅎㅇㄴ ㅎ ㄴㅇㅎ ㅇㄴ ㅎㄴ ㅇㅎ ㄴㅇㅎ  "
      />
    </section>
  );
};
export default Home;
