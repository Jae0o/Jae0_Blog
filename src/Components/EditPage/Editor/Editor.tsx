import React, { useEffect, useState } from "react";
import "../../../CSS/EditPage/Editor/Editor.css";
import {
  EditorProps,
  SetEditorPost,
} from "../../../Types/Components/Edit/EditorTypes";
import { PostData } from "../../../Types/API/FirebaseTypes";
import EditorPublicToggle from "./Features/EditorPublic";
import EditorTextInput from "./Features/EditorTextInput";
import EditorMDInput from "./Features/EditotMD";
import EditorCategory from "./Features/EditorCategory";
import EditorTags from "./Features/EditorTags";
import { OnClickEvent } from "../../../Types/EventTypes";
import { setLocalStorage } from "../../../API/LocalStorage";
import { postUploadValidate } from "../../../Util/Validate";
import { NEW_POST } from "../../../constants/variables";
import { FetchPostFunc } from "../../../Types/Components/PostPage/PostPageType";
import { getPost } from "../../../API/FirebaseDB";

const Editor: React.FC<EditorProps> = ({
  id,
  category,
  categoryList,
  tagList,
  onSubmit,
}) => {
  const [postData, setPostData] = useState<PostData>(NEW_POST);

  useEffect(() => {
    if (id === "newPost") {
      setPostData(NEW_POST);
      return;
    }

    const fetchPost: FetchPostFunc = async (category, pathId) => {
      const resPost: PostData = await getPost(category, pathId);
      setPostData(resPost);
    };

    fetchPost(category, id);
  }, [id, category]);

  const setPostHandler: SetEditorPost = (key, value) => {
    const newPostData: PostData = {
      ...postData,
      [key]: value,
    };
    setPostData(newPostData);
    setLocalStorage(newPostData);
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
      <EditorTextInput
        typeName="subtitle"
        onTyping={setPostHandler}
        state={postData.subtitle}
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
      <EditorMDInput
        onTyping={setPostHandler}
        state={postData.main}
      />
    </article>
  );
};

export default Editor;
