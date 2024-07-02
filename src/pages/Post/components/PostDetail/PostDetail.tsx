import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { QUERY_OPTIONS } from "@/api";
import { AlertModal, LoadingSpinner, PostBannerDecoration } from "@/components";
import { QUERY_ERROR } from "@/constants";
import { useModal } from "@/hooks";
import { useQuery } from "@tanstack/react-query";

import * as S from "./PostDetail.style";
import { PostDetailContainer } from "./components";

const PostDetail = (): React.ReactNode => {
  const { isShowModal, openModal, closeModal } = useModal();
  const { id = "" } = useParams();
  const { data, isError, isLoading } = useQuery(
    QUERY_OPTIONS.GET_POST({ postId: id }),
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      openModal();
    }
  }, [isError, openModal]);

  return (
    <>
      <S.PostDetailLayout>
        <PostBannerDecoration />

        {isLoading && (
          <S.PostDetailLoading>
            <LoadingSpinner size="32rem" />
          </S.PostDetailLoading>
        )}

        {data && (
          <PostDetailContainer
            id={id}
            postData={data}
          />
        )}
      </S.PostDetailLayout>

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
