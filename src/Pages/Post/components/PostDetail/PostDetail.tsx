import React, { useContext, useEffect, useState } from "react";
import "./PostDetail.Style.css";
import { useNavigate, useParams } from "react-router-dom";
import { getPost } from "../../../../API/FirebaseDB";
import { PostData } from "../../../../API/Firebase.Types";
import { FetchPostFunc } from "../PostPageType";
import PostBanner from "../../../../Components/PostBanner/PostBanner";
import PostBannerDecoration from "../../../../Components/PostBannerDecoration/PostBannerDecoration";
import PostDetailViewer from "./Components/PostDetailViewer/PostDetailViewer";
import useModal from "../../../../Components/Modal/Hooks/useModal";
import AlertModal from "../../../../Components/Modal/Components/AlertModal/AlertModal";
import { GET_POST_DETAIL_PAGE_POST_FETCH_ERROR } from "../../../../constants/AlertMessage";
import PostAuthAction from "./Components/PostAuthAction/PostAuthAction";
import { ContextAuthUser } from "../../../../Context/ContextAuthUser";
import PostDetailInfo from "./Components/PostDetailInfo/PostDetailContent";

const PostDetail = (): React.ReactNode => {
  const [post, setPost] = useState<PostData>();
  const { category = "", id = "" } = useParams();
  const { isShowModal, openModal, closeModal } = useModal();
  const { isAuthUser } = useContext(ContextAuthUser);
  const navigate = useNavigate();

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
    [category, id, openModal],
  );

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
              <PostDetailInfo post={post} />

              <span className="ptdetail__content-divider" />

              <PostDetailViewer content={post.main} />

              <span className="ptdetail__content-divider" />

              {isAuthUser && (
                <>
                  <PostAuthAction />
                  <span className="ptdetail__content-divider" />
                </>
              )}
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
