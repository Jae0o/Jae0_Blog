import { PostData } from "./FirebaseTypes";

export type SetLocal = (post: PostData) => void;

export type RemoveLocal = (id: string) => void;

export type GetLocal = (id: string) => PostData | boolean;
