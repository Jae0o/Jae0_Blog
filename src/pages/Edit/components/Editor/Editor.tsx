import { v4 } from "uuid";
import "./Editor.Style.css";
import React, { MouseEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPost } from "@/api";
import { NEW_POST } from "@/constants";
import { PostData } from "@/types/original";
import { EditValue } from "./Editor.Types";
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
  const [postData, setPostData] = useState<PostData>(NEW_POST);
  const navigation = useNavigate();

  useEffect(() => {
    if (id === "newPost") {
      setPostData(state => ({
        ...state,
        id: v4(),
      }));

      return;
    }

    const fetchPost = async (category: string, pathId: string) => {
      const resPost = await getPost(category, pathId);

      if (!resPost) {
        // 이후 실패 알림 모달
        navigation("/");
        return;
      }

      setPostData(resPost);
    };

    fetchPost(category, id);
  }, [id, category, navigation]);

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

  return (
    <article className="editor">
      <div className="editor__header">
        <EditorPublic
          state={postData.isPublic}
          onToggle={setPostHandler}
        />
        <button
          className="editor__button"
          onClick={onSubmitPost}>
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
    </article>
  );
};

export default Editor;
