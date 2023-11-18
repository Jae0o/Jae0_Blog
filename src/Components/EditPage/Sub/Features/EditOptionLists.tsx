import React from "react";
import { OnClickEventType } from "../../../../Types/EventTypes";
import { setAddLists } from "../../../../API/FirebaseDB";
import { EditOptionListsProps } from "../../../../Types/Components/Edit/EditSubTypes";

const EditOptionLists: React.FC<EditOptionListsProps> = ({ onUpdate, listType }) => {
  /* SetItem */
  const addListHandler: OnClickEventType = () => {
    const value: string | null = prompt(`새로 추가할 ${listType}의 이름을 넣어주세요`);
    if (!value) return;

    const isAgree: boolean = window.confirm(`${listType}에 ${value} 라는 새로운 값을 추가하실건가요?`);
    if (!isAgree) return;

    setAddLists(listType, value);
    onUpdate(listType, value);
    return;
  };

  return (
    <div className="subpage__optionlists">
      <h6 className="optionlists__title">{listType} 추가</h6>
      <button onClick={addListHandler} className="optionlists__button">
        {listType} 추가
      </button>
    </div>
  );
};

export default EditOptionLists;
