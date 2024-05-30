import "./InsertOptionButton.style.css";

import React from "react";

import { QUERY_KEY, setOptions } from "@/api";
import { useQueryClient } from "@tanstack/react-query";

interface InsertOptionButtonProps {
  listType: string;
}

const InsertOptionButton = ({
  listType,
}: InsertOptionButtonProps): React.ReactNode => {
  const queryClient = useQueryClient();
  const addListHandler = () => {
    const value = prompt(`새로 추가할 ${listType}의 이름을 넣어주세요`);

    if (!value) return;

    const isAgree = window.confirm(
      `${listType}에 ${value} 라는 새로운 값을 추가하실건가요?`,
    );

    if (!isAgree) return;

    setOptions(listType, value);
    queryClient.refetchQueries({ queryKey: QUERY_KEY.GET_OPTIONS(listType) });
    return;
  };

  return (
    <div className="sub__insert">
      <h6 className="insert__title">{listType} 추가</h6>
      <button
        onClick={addListHandler}
        className="insert__button"
      >
        {listType} 추가
      </button>
    </div>
  );
};

export default InsertOptionButton;
