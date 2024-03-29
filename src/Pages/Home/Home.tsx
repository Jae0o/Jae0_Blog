import "./Home.Style.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PostData } from "@/API/Firebase.Types";
import { getAllPostsList } from "@/API/FirebaseDB";
import PostListItem from "../Post/components/PostList/Components/PostListItem";

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
      <nav className="temporary_alert">
        <p className="temporary_alert-text">
          현재 Home에 대한 디자인을 고민중 입니다!
        </p>
      </nav>
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
