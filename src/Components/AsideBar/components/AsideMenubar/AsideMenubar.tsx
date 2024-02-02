import "./AsideMenubar.Style.css";
import React, { useContext } from "react";
import { FaTools } from "react-icons/fa";
import { SiHtml5 } from "react-icons/si";
import MenubarItem from "@/Components/MenubarItem/MenubarItem";
import { ContextPosts } from "@/Context/ContextPosts";

const AsideMenubar = (): React.ReactNode => {
  const { posts } = useContext(ContextPosts);

  return (
    <ul className="aside__menubar">
      <MenubarItem
        icon={FaTools}
        title={"Blog 작업 기록"}
        category={"BLOG_WORK"}
        postCount={posts.BLOG_WORK && posts.BLOG_WORK.length}
      />

      <MenubarItem
        icon={SiHtml5}
        title={"회고 기록"}
        category={"WORK"}
        postCount={posts.WORK && posts.WORK.length}
      />

      <MenubarItem
        icon={SiHtml5}
        title={"WIL MIL"}
        category={"DIARY"}
        postCount={posts.DIARY && posts.DIARY.length}
      />
    </ul>
  );
};

export default AsideMenubar;
