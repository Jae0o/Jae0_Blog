import "./Home.style.css";

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getAllPostsList } from "@/api";
import { PostData } from "@/types/original";

import { PostListItem } from "../Post/components/PostList/components";

type FetchPostsList = () => Promise<void>;

const Home = (): React.ReactNode => {
  const [postsList, setPostsList] = useState<PostData[]>([]);
  const navigation = useNavigate();

  useEffect(() => {
    const fetchPostsList: FetchPostsList = async () => {
      const resAllPostsList = await getAllPostsList();

      if (resAllPostsList) {
        setPostsList(resAllPostsList);
        return;
      }

      fetchPostsList();
    };

    fetchPostsList();
  }, [navigation]);

  return (
    <section className="outlet__home">
      <article className="home__title-layout">
        <h1 className="home__title">Jae0's Blog!!</h1>
      </article>

      <ul className="temporary__ptlist">
        {postsList &&
          postsList.map(post => (
            <PostListItem
              key={post.id}
              post={post}
            />
          ))}
      </ul>
    </section>
  );
};

export default Home;
