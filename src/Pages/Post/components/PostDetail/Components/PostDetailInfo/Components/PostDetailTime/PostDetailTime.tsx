import "./PostDetailTime.Style.css";
import React from "react";
import { convertDateFormat } from "@/util";

interface PostDetailTimeProps {
  title: string;
  time: string;
}

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
