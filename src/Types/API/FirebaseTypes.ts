export interface PostData {
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

export type SetOptions = (optionsType: string, value: string) => Promise<void>;

export type GetOptions = (optionsType: string) => Promise<string[]>;

export type SetPost = (post: PostData) => Promise<void>;

export type GetPostsList = (category: string) => Promise<PostData[]>;

export type GetAllPostsList = () => Promise<PostData[]>;

export type GetPost = (category: string, postId: string) => Promise<PostData>;

export interface ResponcePostsList {
  [key: string]: { [key: string]: PostData };
}
