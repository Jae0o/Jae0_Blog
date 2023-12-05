import { PostDataType } from "./FirebaseTypes";

export type SetLocalFunc = (post: PostDataType) => void;

export type RemoveLocalFunc = (id: string) => void;

export type GetLocalFunc = (id: string) => PostDataType | boolean;
