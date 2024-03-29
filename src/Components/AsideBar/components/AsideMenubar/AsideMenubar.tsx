import "./AsideMenubar.Style.css";
import React, { useContext } from "react";
import MenubarItem from "@/Components/MenubarItem/MenubarItem";
import { ContextPosts } from "@/Context/ContextPosts";
import { MENUBAR_LIST } from "@/constants/variables";

const AsideMenubar = (): React.ReactNode => {
  const { posts } = useContext(ContextPosts);

  return (
    <ul className="aside__menubar">
      {MENUBAR_LIST.map(({ category, icon, title }) => (
        <MenubarItem
          key={category}
          title={title}
          icon={icon}
          category={category}
          postCount={posts[category] && posts[category].length}
        />
      ))}
    </ul>
  );
};

export default AsideMenubar;
