import React, { useState } from "react";

import { OnChangeType } from "../../../../Types/EventTypes";
import { EditPublicToggleProps } from "../../../../Types/EditorTypes";

const EditorPublicToggle: React.FC<EditPublicToggleProps> = ({ state, onToggle }) => {
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
      <label htmlFor="publicToggleBox" className="Editor__public-label"></label>
    </div>
  );
};

export default EditorPublicToggle;
