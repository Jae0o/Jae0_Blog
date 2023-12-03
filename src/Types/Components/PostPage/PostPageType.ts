import { PostDataType } from "../Edit/EditorTypes";

export interface PostBannerParamsType {
  id?: string;
  category?: string;
}

export interface PostListLocationType {
  state: {
    list: PostDataType[];
  };
}
