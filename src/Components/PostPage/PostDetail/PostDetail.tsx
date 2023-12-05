import React, { useEffect, useState } from "react";
import "../../../CSS/PostPage/PostDetail/PostDetail.css";
import { useParams } from "react-router-dom";
import { getPost } from "../../../API/FirebaseDB";
import { PostDataType } from "../../../Types/API/FirebaseTypes";
import { FetchPostFunc } from "../../../Types/Components/PostPage/PostPageType";

const PostDetail: React.FC = () => {
  const [post, setPost] = useState<PostDataType>();
  const { category = "", id = "" } = useParams();

  useEffect(() => {
    const fetchPost: FetchPostFunc = async (category, pathId) => {
      const resPost: PostDataType = await getPost(category, pathId);
      setPost(resPost);
    };

    fetchPost(category, id);
  }, [category, id]);

  console.log(post);
  return (
    <>
      <button>수정 하기</button>
    </>
  );
};

export default PostDetail;
