import { PostData } from "@/types/original";

import { setPost } from "../firebase";

export const MUTATION_KEY = {
  SET_POST: () => ["post", "set"],
};

export const MUTATION_OPTIONS = {
  SET_POST: () => ({
    mutationKey: MUTATION_KEY.SET_POST(),
    mutationFn: (newPost: PostData) => setPost(newPost),
  }),
};
