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
import useModal from "../../../../Components/Modal/Hooks/useModal";
import AlertModal from "../../../../Components/Modal/Components/AlertModal/AlertModal";
import { GET_POST_DETAIL_PAGE_POST_FETCH_ERROR } from "../../../../constants/AlertMessage";

const PostDetail = (): React.ReactNode => {
  const [post, setPost] = useState<PostData>();
  const { category = "", id = "" } = useParams();
  const navigation = useNavigate();
  const { isShowModal, openModal, closeModal } = useModal();

  useEffect(
    function initialPost() {
      const fetchPost: FetchPostFunc = async (category, pathId) => {
        const resPost = await getPost(category, pathId);

        if (!resPost) {
          openModal();

          return;
        }

        setPost(resPost);
      };

      fetchPost(category, id);
    },
    [category, id, navigation, openModal],
  );

  const navigate = useNavigate();

  const toEditPage: OnClickEvent = () => {
    navigate(`/editor/${category}/${id}`);
  };

  const handleCloseAlertModal = () => {
    closeModal();
    navigate("/");
  };

  return (
    <>
      {post && (
        <section className="ptdetail__layout">
          <PostBannerDecoration />
          <div className="ptdetail__container">
            <PostBanner
              thumbnail={post.thumbnail}
              mainText={post.title}
              height={40}
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
      )}

      <AlertModal
        isShow={isShowModal}
        onClose={handleCloseAlertModal}
        message={GET_POST_DETAIL_PAGE_POST_FETCH_ERROR}
      />
    </>
  );
};

export default PostDetail;
