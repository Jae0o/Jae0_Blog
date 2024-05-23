import "./InsertOptionButton.css";
import React from "react";
import { OnClickEvent } from "@/Types/Event.Types";
import { setOptions } from "@/api";

interface InsertOptionButtonProps {
  onUpdate: (name: string) => void;
  listType: string;
}

const InsertOptionButton = ({
  onUpdate,
  listType,
}: InsertOptionButtonProps): React.ReactNode => {
  const addListHandler: OnClickEvent = () => {
    const value: string | null = prompt(
      `새로 추가할 ${listType}의 이름을 넣어주세요`,
    );
    if (!value) return;

    const isAgree: boolean = window.confirm(
      `${listType}에 ${value} 라는 새로운 값을 추가하실건가요?`,
    );
    if (!isAgree) return;

    setOptions(listType, value);
    onUpdate(listType);
    return;
  };

  return (
    <div className="sub__insert">
      <h6 className="insert__title">{listType} 추가</h6>
      <button
        onClick={addListHandler}
        className="insert__button">
        {listType} 추가
      </button>
    </div>
  );
};

export default InsertOptionButton;
