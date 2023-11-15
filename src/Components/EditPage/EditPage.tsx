import React, { useState, useEffect } from "react";
import EditTextInput from "./Inputs/EditTextInput";
import { PostData, setPostType } from "../../Types/EditorTypes";
import EditMD from "./Inputs/EditMD";

const EditPage: React.FC = () => {
  const [postData, setPostData] = useState<PostData>({
    title: "제목 없음",
    subtitle: "부제목 없음",
    main: "본문 없음",
  });

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
      {/* private */}
      {/* title */}
      <EditTextInput typeName="title" onTyping={setPostHandler} state={postData.title} />
      {/* subtitle */}
      <EditTextInput typeName="subtitle" onTyping={setPostHandler} state={postData.subtitle} />
      {/* tag */}

      {/* category */}
      {/* body */}
      <EditMD onTyping={setPostHandler} state={postData.main} />
    </section>
  );
};

export default EditPage;
