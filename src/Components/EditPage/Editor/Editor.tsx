import React, { useState } from "react";
import "../../../CSS/EditPage/Editor/Editor.css";
import { EditorProps, PostDataType, EditorSetPostFunc } from "../../../Types/Components/Edit/EditorTypes";
import EditorPublicToggle from "./Features/EditorPublicToggle";
import EditorTextInput from "./Features/EditorTextInput";
import EditorMD from "./Features/EditotMD";
import EditorCategory from "./Features/EditorCategory";

const Editor: React.FC<EditorProps> = ({ post, categoryList }) => {
  const [postData, setPostData] = useState<PostDataType>(post);

  const setPostHandler: EditorSetPostFunc = (key, value) => {
    const newPostData: PostDataType = {
      ...postData,
      [key]: value,
    };

    setPostData(newPostData);
  };
  console.log(postData);

  return (
    <article className="editor">
      {/* private */}
      <EditorPublicToggle state={postData.isPublic} onToggle={setPostHandler} />
      {/* title */}
      <EditorTextInput typeName="title" onTyping={setPostHandler} state={postData.title} />
      {/* subtitle */}
      <EditorTextInput typeName="subtitle" onTyping={setPostHandler} state={postData.subtitle} />
      {/* tag */}

      {/* category */}
      <EditorCategory categoryList={categoryList} onSelecting={setPostHandler} state={postData.category} />
      {/* body */}
      <EditorMD onTyping={setPostHandler} state={postData.main} />
    </article>
  );
};

export default Editor;
