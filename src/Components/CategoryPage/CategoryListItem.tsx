import React from "react";
import { CategoryListItemProps } from "../../Types/Components/CategoryPage/CategoryPageTypes";

const CategoryListItem: React.FC<CategoryListItemProps> = ({ list }) => {
  return (
    <li
      className="categorypage__categorylistitem"
      key={list.id}>
      <div className="categorylistitem__tagbox">
        {list.tag && list.tag.map((tag, index) => <p key={index}>{tag}</p>)}
      </div>
      <div className="categorylistitem__text">
        <h4 className="categorylistitem__title">{list.title}</h4>
        <h6 className="categorylistitem__subtitle">{list.subtitle}</h6>
      </div>
      <div className="categorylistitem__info">
        <p>{list.createAt}</p>
      </div>
    </li>
  );
};

export default CategoryListItem;
