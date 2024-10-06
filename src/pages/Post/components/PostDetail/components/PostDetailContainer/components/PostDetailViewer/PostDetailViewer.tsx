import "@/styles/Quill.style.css";
import "react-quill/dist/quill.snow.css";

import * as S from "./PostDetailViewer.style";

import DOMPurify from "isomorphic-dompurify";

interface PostDetailViewerProps {
  content: string;
}

const PostDetailViewer = ({ content }: PostDetailViewerProps) => {
  const checkXSS = DOMPurify.sanitize(content);

  return (
    <S.PostDetailMainLayout>
      <div
        className=" ql-editor"
        dangerouslySetInnerHTML={{ __html: checkXSS }}
      />
    </S.PostDetailMainLayout>
  );
};

export default PostDetailViewer;
