import React, { useState } from "react";
import "../../../CSS/EditPage/Editor/Editor.css";
import { EditorProps, PostDataType, EditorSetPostFunc } from "../../../Types/Components/Edit/EditorTypes";
import EditorPublicToggle from "./Features/EditorPublicToggle";
import EditorTextInput from "./Features/EditorTextInput";
import EditorMD from "./Features/EditotMD";
import EditorCategory from "./Features/EditorCategory";
import EditorTags from "./Features/EditorTags";
import { OnClickEventType } from "../../../Types/EventTypes";
import { setPost } from "../../../API/FirebaseDB";
import { getLocalStorage, setLocalStorage } from "../../../API/LocalStorage";

const Editor: React.FC<EditorProps> = ({ post, categoryList, tagList }) => {
  const [postData, setPostData] = useState<PostDataType>(post);

  const setPostHandler: EditorSetPostFunc = (key, value) => {
    const newPostData: PostDataType = {
      ...postData,
      [key]: value,
    };
    setLocalStorage(newPostData);
    setPostData(newPostData);
  };

  const onPost: OnClickEventType = (e) => {
    e.preventDefault();
    if (!postData.category) {
      alert("카테고리를 꼭 설정해주세요");
      return;
    }
    setPost(postData);
  };

  const getget = () => {
    const data = getLocalStorage(postData.id);
    console.log(data);
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
      <EditorTags onSelecting={setPostHandler} state={postData.tag} tags={tagList} />
      {/* category */}
      <EditorCategory categoryList={categoryList} onSelecting={setPostHandler} state={postData.category} />
      {/* body */}
      <EditorMD onTyping={setPostHandler} state={postData.main} />
      <button onClick={onPost}>제출</button>
      <button onClick={getget}></button>
    </article>
  );
};

export default Editor;
