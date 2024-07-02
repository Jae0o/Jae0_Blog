import { useScroll } from "framer-motion";

import React, { useContext, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { ContextAuthUser } from "@/Context/ContextAuthUser";
import { QUERY_OPTIONS } from "@/api";
import {
  AlertModal,
  PostBanner,
  PostBannerDecoration,
  ProgressBar,
} from "@/components";
import { QUERY_ERROR } from "@/constants";
import { useModal } from "@/hooks";
import { useQuery } from "@tanstack/react-query";

import * as S from "./PostDetail.style";
import { PostAuthAction, PostDetailInfo, PostDetailViewer } from "./components";

const PostDetail = (): React.ReactNode => {
  const { isShowModal, openModal, closeModal } = useModal();
  const { id = "" } = useParams();
  const { data, isError } = useQuery(QUERY_OPTIONS.GET_POST({ postId: id }));
  const { isAuthUser } = useContext(ContextAuthUser);
  const navigate = useNavigate();

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ container: ref });

  useEffect(() => {
    if (isError) {
      openModal();
    }
  }, [isError, openModal]);

  return (
    <>
      {data && (
        <S.PostDetailLayout>
          <PostBannerDecoration />
          <S.PostDetailContainer ref={ref}>
            <ProgressBar scrollYProgress={scrollYProgress} />
            <PostBanner
              thumbnail={data.thumbnail}
              mainText={data.title}
              height={50}
              objectFit={"contain"}
            />

            <S.PostDetailContent data-color-mode="light">
              <PostDetailInfo post={data} />

              <S.PostDetailDivider />

              <PostDetailViewer content={data.main} />

              <S.PostDetailDivider />

              {isAuthUser && (
                <>
                  <PostAuthAction postId={id} />
                  <S.PostDetailDivider />
                </>
              )}
            </S.PostDetailContent>
          </S.PostDetailContainer>
        </S.PostDetailLayout>
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
