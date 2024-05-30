import { get, ref, set } from "firebase/database";

import { ERROR_MESSAGE } from "@/constants";
import { PostData } from "@/types/original";

import { database } from "./firebase";

/* ============== Lists ============== */

type SetOptions = (optionsType: string, value: string) => Promise<void>;

export const setOptions: SetOptions = async (optionsType, value) => {
  try {
    await set(ref(database, `${optionsType}/${value}`), value);
  } catch (e) {
    throw Error(`${optionsType}${ERROR_MESSAGE.SET_OPTION_LIST}`);
  }
};

type GetOptions = (optionsType: string) => Promise<string[]>;

export const getOptions: GetOptions = async optionsType => {
  return await get(ref(database, optionsType))
    .then(res => {
      if (res.exists()) {
        const fetchedOptions: string[] = Object.values(res.val());
        return fetchedOptions;
      }

      throw new Error("getOption Error");
    })
    .catch(() => {
      throw new Error("getOption Error");
    });
};

/* =============== POST =============== */

type SetPost = (post: PostData) => Promise<void>;

export const setPost: SetPost = async post => {
  const time = JSON.stringify(new Date());

  if (!post.createAt) {
    post.createAt = time;
  }

  post.updateAt = time;

  await set(ref(database, `Posts/${post.category}/${post.id}`), post).catch(
    () => {
      throw new Error("set post Error");
    },
  );
};

type GetPostsList = (category: string) => Promise<PostData[] | false>;

export const getPostsList: GetPostsList = async category => {
  return await get(ref(database, `Posts/${category}`))
    .then(res => {
      if (res.exists()) {
        const fetchedList: PostData[] = Object.values(res.val());
        return fetchedList;
      }
      return false;
    })
    .catch(error => {
      console.error(error);
      return false;
    });
};

export interface ResponsePostsList {
  [key: string]: { [key: string]: PostData };
}
type GetAllPostsList = () => Promise<ResponsePostsList>;

export const getAllPostsList: GetAllPostsList = async () => {
  return await get(ref(database, `Posts/`))
    .then(res => {
      if (res.exists()) {
        const fetchedList: ResponsePostsList = res.val();
        return fetchedList;
      }
      throw Error("get all post Error");
    })
    .catch(() => {
      throw Error("get all post Error");
    });
};

type GetPost = (category: string, postId: string) => Promise<PostData | false>;

export const getPost: GetPost = async (category, postId) => {
  return await get(ref(database, `Posts/${category}/${postId}`))
    .then(res => {
      if (res.exists()) {
        return res.val();
      }
      return false;
    })
    .catch(() => {
      return false;
    });
};

interface DeletePost {
  postCategory: string;
  postId: string;
}
export const deletePost = async ({ postCategory, postId }: DeletePost) => {
  await set(ref(database, `Posts/${postCategory}/${postId}`), null);
};
