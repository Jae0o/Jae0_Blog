import React from "react";
import "../../CSS/CategoryPage/CategoryPage.css";
import { useLocation } from "react-router-dom";
import CategoryListItem from "./CategoryListItem";
import { CategoryLocationType } from "../../Types/Components/CategoryPage/CategoryPageTypes";

const CategoryPage: React.FC = () => {
  const {
    state: { list },
  }: CategoryLocationType = useLocation();

  console.log(list);

  return (
    <section className="nav__categorypage">
      <div className="categorypage__outbox">
        <div className="categorypage__banner">
          <h1>이곳은 HTML의 정보를 담은 공간입니다</h1>
          <h4> 여기는 뭐 명언이나 이런걸 적어도되겠죠</h4>
        </div>
        <ul className="categorypage__listbox">
          {list &&
            list.map((item) => (
              <CategoryListItem
                list={item}
                key={item.id}
              />
            ))}
        </ul>
      </div>
    </section>
  );
};

export default CategoryPage;
