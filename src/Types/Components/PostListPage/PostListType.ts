import { PostDataType } from "../Edit/EditorTypes";

export interface CategoryLocationType {
  state: {
    list: PostDataType[];
  };
}

export interface CategoryListItemProps {
  list: PostDataType;
}
