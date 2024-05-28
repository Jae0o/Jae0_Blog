import "./AsideMenubar.style.css";

import React, { useContext } from "react";

import { ContextPosts } from "@/Context/ContextPosts";
import { MenubarItem } from "@/components";
import { MENUBAR_LIST } from "@/constants";

const AsideMenubar = (): React.ReactNode => {
  const { posts } = useContext(ContextPosts);

  return (
    <ul className="aside__menubar">
      {MENUBAR_LIST.map(({ category, IconComponent, title }) => (
        <MenubarItem
          key={category}
          title={title}
          IconComponent={IconComponent}
          category={category}
          postCount={posts[category] && posts[category].length}
        />
      ))}
    </ul>
  );
};

export default AsideMenubar;
