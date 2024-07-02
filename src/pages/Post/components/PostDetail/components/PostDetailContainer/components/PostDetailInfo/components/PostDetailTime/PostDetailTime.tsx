import React from "react";

import { convertDateFormat } from "@/util";

import * as GS from "../../PostDetailInfo.style";
import * as S from "./PostDetailTime.style";

interface PostDetailTimeProps {
  title: string;
  time: string;
}

const PostDetailTime = ({
  title,
  time,
}: PostDetailTimeProps): React.ReactNode => {
  return (
    <S.DetailTimeContainer>
      <GS.DetailInfoContentTitle>{title}</GS.DetailInfoContentTitle>
      <S.DetailTimeContent>
        {convertDateFormat(JSON.parse(time))}
      </S.DetailTimeContent>
    </S.DetailTimeContainer>
  );
};

export default PostDetailTime;
