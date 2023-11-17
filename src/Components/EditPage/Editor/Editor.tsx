import React, { useState, useEffect } from "react";
import "../../../CSS/EditPage/Editor/Editor.css";
import { PostData, setPostType } from "../../../Types/Components/Edit/EditorTypes";
import EditorPublicToggle from "./Features/EditorPublicToggle";
import EditorTextInput from "./Features/EditorTextInput";
import EditorMD from "./Features/EditotMD";

const newPost: PostData = {
  title: "제목 없음",
  subtitle: "부제목 없음",
  main: "본문 없음",
  isPublic: true,
};

const Editor: React.FC = () => {
  const [postData, setPostData] = useState<PostData>(newPost);

  useEffect(() => {
    console.log(postData);
  }, [postData]);

  const setPostHandler: setPostType = (key, value) => {
    const newPostData: PostData = {
      ...postData,
      [key]: value,
    };

    setPostData(newPostData);
  };

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
      {/* body */}
      <EditorMD onTyping={setPostHandler} state={postData.main} />
    </article>
  );
};

export default Editor;
