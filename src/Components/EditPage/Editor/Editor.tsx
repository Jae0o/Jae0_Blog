import React, { useState } from "react";
import "../../../CSS/EditPage/Editor/Editor.css";
import {
  EditorProps,
  PostDataType,
  EditorSetPostFunc,
} from "../../../Types/Components/Edit/EditorTypes";
import EditorPublicToggle from "./Features/EditorPublicToggle";
import EditorTextInput from "./Features/EditorTextInput";
import EditorMD from "./Features/EditotMD";
import EditorCategory from "./Features/EditorCategory";
import EditorTags from "./Features/EditorTags";
import { OnClickEventType } from "../../../Types/EventTypes";
import { setLocalStorage } from "../../../API/LocalStorage";
import { postUploadValidate } from "../../../Util/Validate";

const Editor: React.FC<EditorProps> = ({ post, categoryList, tagList, onSubmit }) => {
  const [postData, setPostData] = useState<PostDataType>(post);

  const setPostHandler: EditorSetPostFunc = (key, value) => {
    const newPostData: PostDataType = {
      ...postData,
      [key]: value,
    };

    setPostData(newPostData);
    setLocalStorage(newPostData);
  };

  /* validation 업로드에 대한 */
  const onPost: OnClickEventType = (e) => {
    e.preventDefault();

    if (postUploadValidate(postData)) {
      onSubmit(postData);
    }
  };

  return (
    <article className="editor">
      <div className="editor__top">
        {/* private */}
        <EditorPublicToggle state={postData.isPublic} onToggle={setPostHandler} />
        {/* submit 버튼 */}
        <button className="editor__submitbutton" onClick={onPost}>
          Upload
        </button>
      </div>
      {/* title */}
      <EditorTextInput typeName="title" onTyping={setPostHandler} state={postData.title} />
      {/* subtitle */}
      <EditorTextInput typeName="subtitle" onTyping={setPostHandler} state={postData.subtitle} />
      {/* category */}
      <EditorCategory
        categoryList={categoryList}
        onSelecting={setPostHandler}
        state={postData.category}
      />
      {/* tag */}
      <EditorTags onSelecting={setPostHandler} state={postData.tag} tags={tagList} />
      {/* body */}
      <EditorMD onTyping={setPostHandler} state={postData.main} />
    </article>
  );
};

export default Editor;
