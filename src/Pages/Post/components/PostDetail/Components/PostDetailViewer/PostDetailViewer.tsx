import DOMPurify from "isomorphic-dompurify";
import { PostDetailViewerProps } from "../../PostDetail.Types";
import "./PostDetailViewer.Styles.css";
import "react-quill/dist/quill.core.css";

const PostDetailViewer = ({ content }: PostDetailViewerProps) => {
  const checkXSS = DOMPurify.sanitize(content);

  return (
    <div
      className="ptdetail__viewer-layout view ql-editor"
      dangerouslySetInnerHTML={{ __html: checkXSS }}
    />
  );
};

export default PostDetailViewer;
