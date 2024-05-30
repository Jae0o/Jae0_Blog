import { SetOptions } from "@/api";
import { PostData } from "@/types/original";

import { DeletePost, deletePost, setOptions, setPost } from "../firebase";

export const MUTATION_KEY = {
  SET_POST: () => ["post", "set"],
  SET_OPTIONS: (optionType: string) => ["options", "set", optionType],

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

  DELETE_POST: () => ({
    mutationKey: MUTATION_KEY.DELETE_POST(),
    mutationFn: (deleteInfo: DeletePost) => deletePost(deleteInfo),
  }),
};
