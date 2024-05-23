import DOMPurify from "isomorphic-dompurify";
import "./PostDetailViewer.Styles.css";
import "@/Styles/Quill.Styles.css";
import "react-quill/dist/quill.snow.css";

interface PostDetailViewerProps {
  content: string;
}

const PostDetailViewer = ({ content }: PostDetailViewerProps) => {
  const checkXSS = DOMPurify.sanitize(content);

  return (
    <section className="ptdetail__viewer-layout">
      <div
        className=" ql-editor"
        dangerouslySetInnerHTML={{ __html: checkXSS }}
      />
    </section>
  );
};

export default PostDetailViewer;
