import React, { useEffect, useState } from "react";
import "../../../CSS/PostPage/PostList/PostList.css";
import { adviceList, defaultAdvice } from "../../../constants/variables";
import { AdviceType } from "../../../Types/Constants/VariablesType";
// import { useLocation } from "react-router-dom";
// import { PostListLocationType } from "../../Types/Components/PostListPage/PostListType";

const PostList: React.FC = () => {
  const [advice, setAdvice] = useState<AdviceType>(defaultAdvice);
  console.log(advice);
  // const {
  //   state: { list },
  // }: PostListLocationType = useLocation();

  useEffect(function makeAdvice() {
    const randomNum: number = Math.random() * 10;
    const randomIndex: number = Math.floor(randomNum);
    setAdvice(adviceList[randomIndex]);
  }, []);

  return (
    <section className="outlet__postlist">
      <div>리스트 페이지</div>
    </section>
  );
};

export default PostList;
