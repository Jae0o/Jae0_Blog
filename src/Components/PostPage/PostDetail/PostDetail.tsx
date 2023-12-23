import React, { useEffect, useState } from "react";
import "./PostDetail.Style.css";
import { useNavigate, useParams } from "react-router-dom";
import { getPost } from "../../../API/FirebaseDB";
import { PostData } from "../../../API/Firebase.Types";
import { FetchPostFunc } from "../PostPageType";

import MDEditor from "@uiw/react-md-editor";
import { OnClickEvent } from "../../../Types/Event.Types";
import PostBanner from "../PostBanner/PostBanner";
import PostDetailTime from "./Components/PostDetailTime/PostDetailTime";
import PostDetailCategory from "./Components/PostDetailCategory/PostDetailCategory";
import PostDetailTags from "./Components/PostDetailTag/PostDetailTags";

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

  if (!post) {
    // Todo - 로딩에대한 처리를 추가해야함
    return;
  }
  return (
    <>
      <div className="ptdetail__banner">
        <PostBanner
          thumbnail={post.thumbnail}
          mainText={post.title}
        />
      </div>
      <div
        className="ptdetail__content"
        data-color-mode="light">
        <div className="ptdetail__info">
          <PostDetailTime
            title={"생성 일시"}
            time={post.createAt}
          />
          <span className="ptdetail__info-divider" />
          <PostDetailTime
            title={"변경 일시"}
            time={post.updateAt}
          />
          <span className="ptdetail__info-divider" />
          <PostDetailCategory category={post.category} />
          <span className="ptdetail__info-divider" />
          <PostDetailTags tags={post.tag} />
        </div>
        <span className="ptdetail__content-divider" />
        <MDEditor.Markdown
          className="test"
          source={post.main}
        />
        <button onClick={toEditPage}>수정 하기</button>
      </div>
    </>
  );
};

export default PostDetail;
