import "./PostDetailTime.Style.css";
import { convertDateFormat } from "../../../../../Util/UtilFunctions";
import { PostDetailTimeProps } from "../../PostDetail.Types";

const PostDetailTime = ({ title, time }: PostDetailTimeProps): JSX.Element => {
  return (
    <div className="ptdetail__time-container">
      <h6 className="ptdetail__time-title">{title}</h6>
      <p className="ptdetail__time">{convertDateFormat(JSON.parse(time))}</p>
    </div>
  );
};

export default PostDetailTime;
