import React from "react";
import "../../CSS/EditPage/Edit.css";
import EditPage from "./Editor/Editor";
import EditSubPage from "./Sub/EditSubPage";

const Edit: React.FC = () => {
  return (
    <section className="outlet__edit">
      <EditPage />
      <EditSubPage />
    </section>
  );
};

export default Edit;
