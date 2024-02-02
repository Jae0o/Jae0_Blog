import "./AsideMenubar.Style.css";
import React, { useContext } from "react";
import { SiHtml5 } from "react-icons/si";
import { ContextPosts } from "@/Context/ContextPosts";
import AsideMenubarItem from "./Components/AsideMenubarItem";

const AsideMenubar = (): React.ReactNode => {
  const { posts } = useContext(ContextPosts);

  return (
    <ul className="aside__menubar">
      <AsideMenubarItem
        icon={SiHtml5}
        title={"회고 기록"}
        category={"WORK"}
        postCount={posts.WORK && posts.WORK.length}
      />
      <AsideMenubarItem
        icon={SiHtml5}
        title={"WIL MIL"}
        category={"DIARY"}
        postCount={posts.DIARY && posts.DIARY.length}
      />
    </ul>
  );
};

export default AsideMenubar;
