import { IconType } from "react-icons";
import { PostsStateType } from "../../Context/ContextTypes";

export interface NavMenubarItemProps {
  icon: IconType;
  title: string;
  category: string;
  posts: PostsStateType;
}
