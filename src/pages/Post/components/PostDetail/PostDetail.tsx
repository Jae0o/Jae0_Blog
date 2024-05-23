import "./PostDetail.Style.css";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ContextAuthUser } from "@/Context/ContextAuthUser";
import { getPost } from "@/api";
import { AlertModal, PostBanner, PostBannerDecoration } from "@/components";
import { GET_POST_DETAIL_PAGE_POST_FETCH_ERROR } from "@/constants";
import { useModal } from "@/hooks";
import { PostData } from "@/types/original";
import { FetchPostFunc } from "../PostPageType";
import PostAuthAction from "./Components/PostAuthAction/PostAuthAction";
import PostDetailInfo from "./Components/PostDetailInfo/PostDetailInfo";
import PostDetailViewer from "./Components/PostDetailViewer/PostDetailViewer";

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
              height={50}
              objectFit={"contain"}
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
                  <PostAuthAction
                    postCategory={category}
                    postId={id}
                  />
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
