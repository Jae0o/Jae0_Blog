import "./AsideMenubar.Style.css";
import React, { useContext } from "react";
import { FaTools } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { RiReactjsLine } from "react-icons/ri";
import MenubarItem from "@/Components/MenubarItem/MenubarItem";
import { ContextPosts } from "@/Context/ContextPosts";

const AsideMenubar = (): React.ReactNode => {
  const { posts } = useContext(ContextPosts);

  return (
    <ul className="aside__menubar">
      <MenubarItem
        icon={FaTools}
        title={"Blog 작업 기록"}
        category={"BLOG"}
        postCount={posts.BLOG && posts.BLOG.length}
      />

      <MenubarItem
        icon={FaBook}
        title={"회고 기록"}
        category={"WORK"}
        postCount={posts.WORK && posts.WORK.length}
      />

      <MenubarItem
        icon={RiReactjsLine}
        title={"Frontend"}
        category={"Frontend"}
        postCount={posts.Frontend && posts.Frontend.length}
      />

      <MenubarItem
        icon={FaRegCalendarCheck}
        title={"I Learn"}
        category={"DIARY"}
        postCount={posts.DIARY && posts.DIARY.length}
      />
    </ul>
  );
};

export default AsideMenubar;
