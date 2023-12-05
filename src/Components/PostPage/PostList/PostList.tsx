import React, { useEffect, useState } from "react";
import "../../../CSS/PostPage/PostList/PostList.css";
import { useParams } from "react-router-dom";
import PostListItem from "./PostListItem";
import { getAllPostsList, getPostsList } from "../../../API/FirebaseDB";
import { FetchPostsListFunc } from "../../../Types/Components/PostPage/PostListTypes";
import { PostDataType } from "../../../Types/API/FirebaseTypes";

const PostList: React.FC = () => {
  const [postsList, setPostsList] = useState<PostDataType[]>([]);

  const { category = "ALL" } = useParams();

  useEffect(() => {
    const fetchPostsList: FetchPostsListFunc = async () => {
      if (category === "ALL") {
        const resAllPostsList: PostDataType[] = await getAllPostsList();
        setPostsList(resAllPostsList);
        return;
      }

      const resPostsList: PostDataType[] = await getPostsList(category);
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
