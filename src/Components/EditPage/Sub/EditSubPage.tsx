import React from "react";
import "../../../CSS/EditPage/EditSubPage/EditSubPage.css";
import EditCategory from "./Features/EditCategory";

const EditSubPage: React.FC = () => {
  return (
    <aside className="editsubpage">
      <EditCategory />
    </aside>
  );
};

export default EditSubPage;
