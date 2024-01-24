import { UserCredential } from "firebase/auth";

export interface PostData {
  id: string;
  createAt: string;
  updateAt: string;
  isPublic: boolean;
  title: string;
  main: string;
  category: string;
  tag: string[];
  thumbnail: string;
}
// DB Types

export type SetOptions = (optionsType: string, value: string) => Promise<void>;

export type GetOptions = (optionsType: string) => Promise<string[]>;

export type SetPost = (post: PostData) => Promise<void>;

export type GetPostsList = (category: string) => Promise<PostData[] | false>;

export type GetAllPostsList = () => Promise<PostData[]>;

export type GetPost = (
  category: string,
  postId: string,
) => Promise<PostData | false>;

export interface ResponsePostsList {
  [key: string]: { [key: string]: PostData };
}

// Auth Types

export type SignUp = (email: string, password: string) => void;

export type Login = (
  email: string,
  password: string,
) => Promise<UserCredential>;
