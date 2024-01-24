import React, { useContext } from "react";
import "./Home.Style.css";
import { ContextAuthUser } from "../../Context/ContextAuthUser";

const Home = (): React.ReactNode => {
  const { login } = useContext(ContextAuthUser);

  login({
    email: "leey153@naver.com",
    password: "dlwodud2954",
  });

  return <section className="outlet__home"></section>;
};
export default Home;
