import { SetOptions } from "@/api";
import { PostData } from "@/types/original";

import {
  SetImageStorage,
  deletePost,
  setImageStorage,
  setOptions,
  setPost,
  setPostImageStorage,
} from "../firebase";

export const MUTATION_KEY = {
  SET_POST: () => ["post", "set"],
  SET_OPTIONS: (optionType: string) => ["options", "set", optionType],
  SET_IMAGE: () => ["image", "set"],
  SET_POST_IMAGE: () => ["image", "post", "set"],

  DELETE_POST: () => ["delete", "post"],
};

export const MUTATION_OPTIONS = {
  SET_POST: () => ({
    mutationKey: MUTATION_KEY.SET_POST(),
    mutationFn: (newPost: PostData) => setPost(newPost),
  }),

  SET_OPTION: (optionType: string) => ({
    mutationKey: MUTATION_KEY.SET_OPTIONS(optionType),
    mutationFn: (newOption: SetOptions) => setOptions(newOption),
  }),

  SET_IMAGE: () => ({
    mutationKey: MUTATION_KEY.SET_IMAGE(),
    mutationFn: (imageInfo: SetImageStorage) => setImageStorage(imageInfo),
  }),

  SET_POST_IMAGE: () => ({
    mutationKey: MUTATION_KEY.SET_IMAGE(),
    mutationFn: (imageInfo: SetImageStorage) => setPostImageStorage(imageInfo),
  }),

  DELETE_POST: () => ({
    mutationKey: MUTATION_KEY.DELETE_POST(),
    mutationFn: (deleteInfo: { postId: string }) => deletePost(deleteInfo),
  }),
};
