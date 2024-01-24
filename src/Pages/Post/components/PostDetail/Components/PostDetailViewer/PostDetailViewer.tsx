import DOMPurify from "isomorphic-dompurify";
import { PostDetailViewerProps } from "../../PostDetail.Types";
import "./PostDetailViewer.Styles.css";

const PostDetailViewer = ({ content }: PostDetailViewerProps) => {
  const checkXSS = DOMPurify.sanitize(content);

  return <div className="ptdetail__viewer-layout">{checkXSS}</div>;
};

export default PostDetailViewer;
