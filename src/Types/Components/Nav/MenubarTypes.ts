import { IconType } from "react-icons";
import { PostDataType } from "../Edit/EditorTypes";

export interface MenubarItemProps {
  icon: IconType;
  title: string;
  category: string;
  list: PostDataType[];
}
