import React, { useEffect, useState } from "react";
import "../../../CSS/PostPage/PostList/PostList.css";
import { useParams } from "react-router-dom";
import PostListItem from "./PostListItem";
import { getAllPostsList, getPostsList } from "../../../API/FirebaseDB";
import { FetchPostsList } from "../../../Types/Components/PostPage/PostListTypes";
import { PostData } from "../../../API/Firebase.Types";

const PostList: React.FC = () => {
  const [postsList, setPostsList] = useState<PostData[]>([]);

  const { category = "ALL" } = useParams();

  useEffect(() => {
    const fetchPostsList: FetchPostsList = async () => {
      if (category === "ALL") {
        const resAllPostsList: PostData[] = await getAllPostsList();
        setPostsList(resAllPostsList);
        return;
      }

      const resPostsList: PostData[] = await getPostsList(category);
      setPostsList(resPostsList);
    };
    fetchPostsList();
  }, [category]);

  return (
    <ul className="outlet__ptlist">
      {postsList &&
        postsList.map(post => (
          <PostListItem
            post={post}
            key={post.id}
          />
        ))}
    </ul>
  );
};

export default PostList;
