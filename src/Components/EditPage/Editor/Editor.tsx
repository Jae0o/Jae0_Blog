import React, { useState } from "react";
import "../../../CSS/EditPage/Editor/Editor.css";
import {
  EditorProps,
  SetEditorPostFunc,
} from "../../../Types/Components/Edit/EditorTypes";
import { PostDataType } from "../../../Types/API/FirebaseTypes";
import EditorPublicToggle from "./Features/EditorPublic";
import EditorTextInput from "./Features/EditorTextInput";
import EditorMD from "./Features/EditotMD";
import EditorCategory from "./Features/EditorCategory";
import EditorTags from "./Features/EditorTags";
import { OnClickEventType } from "../../../Types/EventTypes";
import { setLocalStorage } from "../../../API/LocalStorage";
import { postUploadValidate } from "../../../Util/Validate";

const Editor: React.FC<EditorProps> = ({
  post,
  categoryList,
  tagList,
  onSubmit,
}) => {
  const [postData, setPostData] = useState<PostDataType>(post);

  const setPostHandler: SetEditorPostFunc = (key, value) => {
    const newPostData: PostDataType = {
      ...postData,
      [key]: value,
    };
    setPostData(newPostData);
    setLocalStorage(newPostData);
  };

  const onSubmitPost: OnClickEventType = e => {
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
      <EditorMD
        onTyping={setPostHandler}
        state={postData.main}
      />
    </article>
  );
};

export default Editor;
