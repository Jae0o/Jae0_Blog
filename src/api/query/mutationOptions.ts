import { SetOptions } from "@/api";
import { PostData } from "@/types/original";

import {
  SetImageStorage,
  deletePost,
  increaseVisitCount,
  setOptions,
  setPost,
  setPostImageStorage,
  setThumbnailImageStorage,
} from "../firebase";

export const MUTATION_KEY = {
  SET_POST: () => ["post", "set"],
  SET_OPTIONS: (optionType: string) => ["options", "set", optionType],
  SET_IMAGE: () => ["image", "set"],
  SET_POST_IMAGE: () => ["image", "post", "set"],

  DELETE_POST: () => ["delete", "post"],

  INCREASE_VISIT_COUNT: () => ["increase", "visit", "count"],
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
    mutationFn: (imageInfo: SetImageStorage) =>
      setThumbnailImageStorage(imageInfo),
  }),

  SET_POST_IMAGE: () => ({
    mutationKey: MUTATION_KEY.SET_IMAGE(),
    mutationFn: (imageInfo: SetImageStorage) => setPostImageStorage(imageInfo),
  }),

  DELETE_POST: () => ({
    mutationKey: MUTATION_KEY.DELETE_POST(),
    mutationFn: (deleteInfo: { postId: string }) => deletePost(deleteInfo),
  }),

  INCREASE_VISIT_COUNT: () => ({
    mutationKey: MUTATION_KEY.INCREASE_VISIT_COUNT(),
    mutationFn: () => increaseVisitCount(),
  }),
};
