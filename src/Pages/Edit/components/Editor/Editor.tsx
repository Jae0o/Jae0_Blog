import React, { useEffect, useState } from "react";
import "./Editor.Style.css";
import { EditorProps, SetEditorPost } from "./Editor.Types";
import { PostData } from "../../../../API/Firebase.Types";
import EditorPublicToggle from "./Components/EditorPublic/EditorPublic";
import EditorTextInput from "./Components/EditorTextInput/EditorTextInput";
import EditorMDInput from "./Components/EditorMD/EditorMD";
import EditorCategory from "./Components/EditorCategory/EditorCategory";
import EditorTags from "./Components/EditorTags/EditorTags";
import { postUploadValidate } from "../../../../Util/Validate";
import { NEW_POST } from "../../../../constants/variables";
import { FetchPostFunc } from "../../../Post/components/PostPageType";
import { getPost } from "../../../../API/FirebaseDB";
import { OnClickEvent } from "../../../../Types/Event.Types";
import EditorThumbnail from "./Components/EditorThumbnail/EditorThumbnail";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";

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

    const fetchPost: FetchPostFunc = async (category, pathId) => {
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

  const onSubmitPost: OnClickEvent = e => {
    e.preventDefault();

    if (postUploadValidate(postData)) {
      onSubmit(postData);
    }
  };

  return (
    <article className="editor">
      <div className="editor__header">
        <EditorPublicToggle
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

      <EditorMDInput
        onTyping={setPostHandler}
        state={postData.main}
      />
    </article>
  );
};

export default Editor;
