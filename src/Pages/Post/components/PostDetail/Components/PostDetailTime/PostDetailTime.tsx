import "./PostDetailTime.Style.css";
import { convertDateFormat } from "../../../../../../Util/UtilFunctions";
import { PostDetailTimeProps } from "../../PostDetail.Types";
import React from "react";

const PostDetailTime = ({
  title,
  time,
}: PostDetailTimeProps): React.ReactNode => {
  return (
    <div className="ptdetail__time-container">
      <h6 className="ptdetail__time-title">{title}</h6>
      <p className="ptdetail__time">{convertDateFormat(JSON.parse(time))}</p>
    </div>
  );
};

export default PostDetailTime;
