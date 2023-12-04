import { PostDataType } from "../Edit/EditorTypes";

export interface PostListLocationType {
  state: {
    list: PostDataType[];
  };
}

export interface PostListItemProps {
  post: PostDataType;
}
