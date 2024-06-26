import "./InsertOptionButton.style.css";

import React from "react";

import { MUTATION_OPTIONS } from "@/api";
import { useOptionsStore } from "@/stores";
import { useMutation } from "@tanstack/react-query";

interface InsertOptionButtonProps {
  optionName: string;
  optionList: string[];
}

const InsertOptionButton = ({
  optionName,
  optionList,
}: InsertOptionButtonProps): React.ReactNode => {
  const { mutate } = useMutation(MUTATION_OPTIONS.SET_OPTION(optionName));
  const { setOption } = useOptionsStore();

  const addListHandler = () => {
    const value = prompt(`새로 추가할 ${optionName}의 이름을 넣어주세요`);

    if (!value) return;

    const isAgree = window.confirm(
      `${optionName}에 ${value} 라는 새로운 값을 추가하실건가요?`,
    );

    if (!isAgree) return;

    mutate(
      { option: optionName, value: [...optionList, value] },
      {
        onSuccess: () => {
          setOption(optionName, [...optionList, value]);
        },
      },
    );
  };

  return (
    <div className="sub__insert">
      <h6 className="insert__title">{optionName} 추가</h6>
      <button
        onClick={addListHandler}
        className="insert__button"
      >
        {optionName} 추가
      </button>
    </div>
  );
};

export default InsertOptionButton;
