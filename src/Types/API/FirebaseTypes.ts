export interface PostDataType {
  id: string;
  createAt: string;
  updateAt: string;
  isPublic: boolean;
  title: string;
  subtitle: string;
  main: string;
  category: string;
  tag: string[];
  thumbnail: string;
}

export type SetOptionsFunc = (
  optionsType: string,
  value: string,
) => Promise<void>;

export type GetOptionsFunc = (optionsType: string) => Promise<string[]>;

export type SetPost = (post: PostDataType) => Promise<void>;

export type GetPostsList = (category: string) => Promise<PostDataType[]>;

export type GetAllPostsList = () => Promise<PostDataType[]>;

export type GetPostFunc = (
  category: string,
  postId: string,
) => Promise<PostDataType>;

export interface ResponcePostsListType {
  [key: string]: { [key: string]: PostDataType };
}
