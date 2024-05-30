import "./PostDetail.style.css";

import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { ContextAuthUser } from "@/Context/ContextAuthUser";
import { QUERY_OPTIONS } from "@/api";
import { AlertModal, PostBanner, PostBannerDecoration } from "@/components";
import { QUERY_ERROR } from "@/constants";
import { useModal } from "@/hooks";
import { useQuery } from "@tanstack/react-query";

import { PostAuthAction, PostDetailInfo, PostDetailViewer } from "./components";

const PostDetail = (): React.ReactNode => {
  const { isShowModal, openModal, closeModal } = useModal();
  const { category = "", id = "" } = useParams();
  const { data, isError } = useQuery(QUERY_OPTIONS.GET_POST({ category, id }));
  const { isAuthUser } = useContext(ContextAuthUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      openModal();
    }
  }, [isError, openModal]);

  return (
    <>
      {data && (
        <section className="ptdetail__layout">
          <PostBannerDecoration />
          <div className="ptdetail__container">
            <PostBanner
              thumbnail={data.thumbnail}
              mainText={data.title}
              height={50}
              objectFit={"contain"}
            />
            <div
              className="ptdetail__content"
              data-color-mode="light"
            >
              <PostDetailInfo post={data} />

              <span className="ptdetail__content-divider" />

              <PostDetailViewer content={data.main} />

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
        onClose={() => {
          closeModal();
          navigate("/");
        }}
        message={QUERY_ERROR.GET_POST}
      />
    </>
  );
};

export default PostDetail;
