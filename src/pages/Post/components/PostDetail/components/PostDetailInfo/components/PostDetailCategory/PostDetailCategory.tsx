import "./PostDetailCategory.style.css";

import React from "react";

interface PostDetailCategoryProps {
  category: string;
}

const PostDetailCategory = ({
  category,
}: PostDetailCategoryProps): React.ReactNode => {
  return (
    <div className="ptdetail__category-container">
      <h6 className="ptdetail__category-title">카테고리</h6>
      <div className="ptdetail__category">{category}</div>
    </div>
  );
};

export default PostDetailCategory;
