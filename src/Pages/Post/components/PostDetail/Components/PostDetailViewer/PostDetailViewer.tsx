import { PostDetailViewerProps } from "../../PostDetail.Types";
import "./PostDetailViewer.Styles.css";

const PostDetailViewer = ({ content }: PostDetailViewerProps) => {
  return <div className="ptdetail__viewer-layout">{content}</div>;
};

export default PostDetailViewer;
