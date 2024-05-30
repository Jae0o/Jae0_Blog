import { v4 } from "uuid";

import "./Editor.style.css";

import React, { MouseEvent, useEffect, useState } from "react";

import { QUERY_OPTIONS } from "@/api";
import { AlertModal } from "@/components";
import { NEW_POST } from "@/constants";
import { useModal } from "@/hooks";
import LoadingPage from "@/pages/Loading/Loading";
import { PostData } from "@/types/original";
import { useQuery } from "@tanstack/react-query";

import { EditValue } from "./Editor.type";
import {
  EditorCategory,
  EditorMD,
  EditorPublic,
  EditorTags,
  EditorTextInput,
  EditorThumbnail,
} from "./components";
import { postUploadValidate } from "./utils";

type SetEditorPost = (
  key: EditValue,
  value: string | boolean | string[],
) => void;

interface EditorProps {
  category: string;
  id: string;
  categoryList: string[];
  tagList: string[];
  onSubmit: (post: PostData) => void;
}

const Editor = ({
  id,
  category,
  categoryList,
  tagList,
  onSubmit,
}: EditorProps): React.ReactNode => {
  const { isShowModal, openModal, closeModal } = useModal();
  const [postData, setPostData] = useState<PostData>({ ...NEW_POST, id: v4() });
  const { data, isError, isLoading } = useQuery({
    ...QUERY_OPTIONS.GET_POST({ category, id }),
    enabled: id !== "newPost",
  });

  useEffect(() => {
    if (!isError && !isLoading && data) {
      setPostData(data);
    }
  }, [data, isError, isLoading]);

  useEffect(() => {
    if (isError) {
      openModal();
    }
  }, [isError, openModal]);

  const setPostHandler: SetEditorPost = (key, value) => {
    setPostData(prevPostData => ({
      ...prevPostData,
      [key]: value,
    }));
  };

  const onSubmitPost = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (postUploadValidate(postData)) {
      onSubmit(postData);
    }
  };

  if (isError || isLoading) {
    return <LoadingPage />;
  }

  return (
    <article className="editor">
      <div className="editor__header">
        <EditorPublic
          state={postData.isPublic}
          onToggle={setPostHandler}
        />
        <button
          className="editor__button"
          onClick={onSubmitPost}
        >
          Upload
        </button>
      </div>

      <EditorTextInput
        typeName="title"
        onTyping={setPostHandler}
        state={postData.title}
      />

      <EditorCategory
        categoryList={categoryList}
        onSelecting={setPostHandler}
        state={postData.category}
      />

      <EditorTags
        onSelecting={setPostHandler}
        state={postData.tag}
        tags={tagList}
      />

      <EditorThumbnail
        onSelect={setPostHandler}
        thumbnail={postData.thumbnail}
        postId={postData.id}
      />

      <EditorMD
        onTyping={setPostHandler}
        state={postData.main}
      />

      <AlertModal
        isShow={isShowModal}
        onClose={closeModal}
        message=""
      />
    </article>
  );
};

export default Editor;
