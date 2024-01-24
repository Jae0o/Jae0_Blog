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

const Editor = ({
  id,
  category,
  categoryList,
  tagList,
  onSubmit,
}: EditorProps): React.ReactNode => {
  const [postData, setPostData] = useState<PostData>(NEW_POST);
  console.log(postData);

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
    setPostData(prevPostData => ({
      ...prevPostData,
      [key]: value,
    }));
  };

  const onSubmitPost: OnClickEvent = e => {
    e.preventDefault();

    const newPost: PostData = {
      ...postData,
    };

    if (postUploadValidate(newPost)) {
      onSubmit(newPost);
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

      <EditorMDInput
        onTyping={setPostHandler}
        state={postData.main}
      />
    </article>
  );
};

export default Editor;
