import { PostsStateType } from "../../Context/ContextTypes";
import { PostDataType } from "../Edit/EditorTypes";

export interface PostListLocationType {
  state: {
    posts: PostsStateType;
  };
}

export interface PostListItemProps {
  post: PostDataType;
  thumbnail: string;
}
