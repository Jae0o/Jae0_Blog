import React from "react";
import { OnClickEventType } from "../../../../Types/EventTypes";
import { setAddLists } from "../../../../API/FirebaseDB";
import { EditListsProps } from "../../../../Types/Components/Edit/EditSubTypes";

const EditLists: React.FC<EditListsProps> = ({ onUpdate, listType }) => {
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
    <div>
      <h6>{listType} 추가</h6>
      <button onClick={addListHandler}>{listType} 추가</button>
    </div>
  );
};

export default EditLists;
