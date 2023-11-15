import React, { useState, useEffect } from "react";
import EditTitleInput from "./Inputs/EditTitleInput";
import { PostData, setPostType } from "../../Types/EditorTypes";

const EditPage: React.FC = () => {
  const [postData, setPostData] = useState<PostData>();

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
    <section>
      <EditTitleInput typeName="title" onTyping={setPostHandler} />
      <EditTitleInput typeName="subtitle" onTyping={setPostHandler} />
    </section>
  );
};

export default EditPage;
