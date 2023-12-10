import React, { useEffect, useState } from "react";
import "../../../CSS/PostPage/PostDetail/PostDetail.css";
import { useNavigate, useParams } from "react-router-dom";
import { getPost } from "../../../API/FirebaseDB";
import { PostData } from "../../../Types/API/FirebaseTypes";
import { FetchPostFunc } from "../../../Types/Components/PostPage/PostPageType";
import { OnClickEvent } from "../../../Types/EventTypes";

const PostDetail: React.FC = () => {
  const [post, setPost] = useState<PostData>();
  const { category = "", id = "" } = useParams();

  useEffect(
    function inintialPost() {
      const fetchPost: FetchPostFunc = async (category, pathId) => {
        const resPost: PostData = await getPost(category, pathId);
        setPost(resPost);
      };

      fetchPost(category, id);
    },
    [category, id],
  );

  const navigate = useNavigate();
  const toEditPage: OnClickEvent = () => {
    navigate(`/editor/${category}/${id}`);
  };

  console.log(post);
  return (
    <>
      <button onClick={toEditPage}>수정 하기</button>
    </>
  );
};

export default PostDetail;
