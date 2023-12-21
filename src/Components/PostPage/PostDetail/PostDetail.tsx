import React, { useEffect, useState } from "react";
import "./PostDetail.Style.css";
import { useNavigate, useParams } from "react-router-dom";
import { getPost } from "../../../API/FirebaseDB";
import { PostData } from "../../../API/Firebase.Types";
import { FetchPostFunc } from "../PostPageType";

import MDEditor from "@uiw/react-md-editor";
import { OnClickEvent } from "../../../Types/Event.Types";

const PostDetail: React.FC = () => {
  const [post, setPost] = useState<PostData>();
  const { category = "", id = "" } = useParams();

  useEffect(
    function initialPost() {
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
    <div data-color-mode="light">
      <button onClick={toEditPage}>수정 하기</button>
      <h2>{post?.title}</h2>
      <h4>{post?.subtitle}</h4>
      <p>{post?.createAt}</p>
      <p>{post?.updateAt}</p>
      <p>{post?.category}</p>
      <p>{post?.tag}</p>

      <MDEditor.Markdown
        className="test"
        source={post?.main}
      />
    </div>
  );
};

export default PostDetail;
