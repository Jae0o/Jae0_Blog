import React, { useEffect, useState } from "react";
import "./PostDetail.Style.css";
import { useNavigate, useParams } from "react-router-dom";
import { getPost } from "../../../../API/FirebaseDB";
import { PostData } from "../../../../API/Firebase.Types";
import { FetchPostFunc } from "../PostPageType";
import { OnClickEvent } from "../../../../Types/Event.Types";
import PostBanner from "../../../../Components/PostBanner/PostBanner";
import PostDetailTime from "./Components/PostDetailTime/PostDetailTime";
import PostDetailCategory from "./Components/PostDetailCategory/PostDetailCategory";
import PostDetailTags from "./Components/PostDetailTag/PostDetailTags";
import PostBannerDecoration from "../../../../Components/PostBannerDecoration/PostBannerDecoration";
import PostDetailViewer from "./Components/PostDetailViewer/PostDetailViewer";

const PostDetail = (): React.ReactNode => {
  const [post, setPost] = useState<PostData>();
  const { category = "", id = "" } = useParams();
  const navigation = useNavigate();

  useEffect(
    function initialPost() {
      const fetchPost: FetchPostFunc = async (category, pathId) => {
        const resPost = await getPost(category, pathId);

        if (!resPost) {
          // 이후 실패 알림 모달
          navigation("/");
          return;
        }

        setPost(resPost);
      };

      fetchPost(category, id);
    },
    [category, id, navigation],
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
    <section className="ptdetail__layout">
      <PostBannerDecoration />
      <div className="ptdetail__container">
        <PostBanner
          thumbnail={post.thumbnail}
          mainText={post.title}
        />
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

          <PostDetailViewer content={post.main} />

          <button onClick={toEditPage}>수정 하기</button>
        </div>
      </div>
    </section>
  );
};

export default PostDetail;
