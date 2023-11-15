import React, { useState } from "react";
import { EditPublicToggleProps } from "../../../Types/EditorTypes";
import { OnChangeType } from "../../../Types/EventTypes";

const EditPublicToggle: React.FC<EditPublicToggleProps> = ({ state, onToggle }) => {
  const [isPublic, setIsPublic] = useState<boolean>(state);

  const onChangeToggle: OnChangeType = (e) => {
    setIsPublic(!isPublic);
    onToggle("isPublic", !isPublic);
  };

  return (
    <div className={`Editor__public-box`}>
      <input
        className={`Editor__public-input`}
        id="publicToggleBox"
        type="checkbox"
        checked={isPublic}
        onChange={onChangeToggle}
      />
      <label htmlFor="publicToggleBox" className="Editor__public-label">
        dd
      </label>
    </div>
  );
};

export default EditPublicToggle;
